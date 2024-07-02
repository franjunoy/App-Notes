import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes, deleteNote, archiveNote } from '../redux/actions/actions';
import ArchivedNotesList from './ArchivedNotesList';

const NotesList = () => {
  const dispatch = useDispatch();
  const { notes, loading, error } = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex items-center justify-center h-screen'>
        Error: {error}
      </div>
    );
  }

  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className='flex justify-between px-16 py-8 w-2/3'>
      <div className=''>
        <h2 className='text-2xl font-bold mb-4'>Active Notes</h2>
        <ul>
          {activeNotes.length > 0 ? (
            activeNotes.map((note) => (
              <li
                key={note.id}
                className='mb-4 p-4 bg-white shadow-md rounded-lg'
              >
                <h3 className='text-lg font-semibold'>{note.title}</h3>
                <p className='text-gray-600'>{note.content}</p>
                <div className='flex mt-2'>
                  <button
                    onClick={() => dispatch(deleteNote(note.id))}
                    className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2'
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => dispatch(archiveNote(note.id))}
                    disabled={note.archived}
                    className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ${
                      note.archived ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    Archive
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className='text-gray-500'>No active notes</li>
          )}
        </ul>
      </div>
      <div className='w-1/3 pl-8'>
        <ArchivedNotesList archivedNotes={archivedNotes} />
      </div>
    </div>
  );
};

export default NotesList;
