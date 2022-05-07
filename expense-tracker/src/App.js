import React, { useState } from 'react';
import ExpensesList from './components/ExpensesList';
import InputForm from './components/InputForm';
import Money from './components/Money';

const App = () => {
  const myExpenses = [];

  const [enteredExpenses, setEnteredExpenses] = useState(myExpenses);

  const getNewExpense = newExp => {
    setEnteredExpenses(prevState => {
      return [...prevState, newExp];
    });
  };

  return (
    <main className='flex items-start gap-3 mt-4'>
      <div className='bg-slate-300 p-3 rounded-sm'>
        <InputForm onAddingExpense={getNewExpense} />
        <Money />
      </div>
      <ExpensesList myExpenses={enteredExpenses} />
    </main>
  );
};

export default App;
