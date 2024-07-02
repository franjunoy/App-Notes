import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, unarchiveNote } from '../redux/actions/actions';

const ArchivedNotesList = ({ archivedNotes }) => {
  const dispatch = useDispatch();

  return (
    <div className='ml-8 w-2/3'>
      <h2 className='text-xl font-bold mb-4'>Archived Notes</h2>
      <ul>
        {archivedNotes.map((note) => (
          <li
            key={note.id}
            className='mb-4 p-4 bg-gray-200 shadow-md rounded-lg'
          >
            <h3 className='break-words'>{note.title}</h3>
            <p className='text-gray-600 break-words'>{note.content}</p>
            <div className='flex mt-2'>
              <button
                onClick={() => dispatch(deleteNote(note.id))}
                className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2'
              >
                Delete
              </button>
              <button
                onClick={() => dispatch(unarchiveNote(note.id))}
                className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
              >
                Unarchive
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArchivedNotesList;
