import React from 'react';
import InputForm from './components/InputForm';
import Money from './components/Money';

function App() {
  return (
    <>
      <div className='bg-slate-100 py-3 flex'>
        <InputForm className='flex-1' />
        <Money className='flex-1' />
      </div>
    </>
  );
}

export default App;
