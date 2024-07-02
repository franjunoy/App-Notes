import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../redux/actions/actions';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert('Notes must have Title and Content');
      return;
    }

    dispatch(createNote({ title, content }));
    setTitle('');
    setContent('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='border mt-8 p-4 rounded-lg bg-gray-200'
    >
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='w-full text-lg font-bold px-3 py-2 mb-4 leading-tight text-gray-800 bg-white border rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline'
      />
      <textarea
        placeholder='Content'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className='w-full h-32 px-3 py-2 mb-4 leading-tight text-gray-800 bg-white border rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline'
      />
      <button
        type='submit'
        className='w-full px-3 py-2 font-bold text-white bg-blue-500 hover:bg-blue-600 border rounded shadow-sm hover:shadow-md focus:outline-none focus:shadow-outline'
      >
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
