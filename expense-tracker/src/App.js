import React from 'react';
import ExpensesList from './components/ExpensesList';
import InputForm from './components/InputForm';
import Money from './components/Money';

function App() {
  return (
    <main className='flex items-start gap-3 mt-4'>
      <div className='bg-slate-300 p-3 rounded-sm'>
        <InputForm />
        <Money />
      </div>
      <ExpensesList />
    </main>
  );
}

export default App;
