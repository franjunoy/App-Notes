import React from 'react';
import NoteList from './component/NoteList';
import NoteForm from './component/NoteForm';

const App = () => {
  return (
    <div className='flex flex-col items-center '>
      <h1 className='text-3xl font-bold underline mb-4'>App de notas</h1>
      <NoteForm />
      <NoteList />
    </div>
  );
};

export default App;
