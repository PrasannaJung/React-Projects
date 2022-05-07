import React, { useState } from 'react';

const Form = props => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const titleChangeHandler = e => {
    setEnteredTitle(e.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState('');
  const amountChangeHandler = e => {
    setEnteredAmount(e.target.value);
  };

  const [enteredDate, setEnteredDate] = useState('');
  const dateChangeHandler = e => {
    setEnteredDate(e.target.value);
  };

  const formSubmitHandler = e => {
    e.preventDefault();
  };

  return (
    <div className='max-w-xl bg-slate-900 p-6 ml-4 rounded-md mb-4 flex-1'>
      <form
        onSubmit={formSubmitHandler}
        className='grid grid-cols-2 gap-6 justify-items-start text-white'
      >
        <div className='flex flex-col'>
          <input
            value={enteredTitle}
            onChange={titleChangeHandler}
            className='text-black outline-none p-1 rounded-md'
            type='text'
            name=''
            id='title'
          />
          <label htmlFor='title'>Title</label>
        </div>
        <div className='flex flex-col'>
          <input
            value={enteredAmount}
            onChange={amountChangeHandler}
            className='text-black outline-none p-1 rounded-md'
            type='number'
            name=''
            id='amount'
          />
          <label htmlFor='amount'>Amount</label>
        </div>
        <div className='justify-self-start self-start'>
          <button
            type='submit'
            className='bg-blue-900 text-white py-2 px-4    rounded-md'
          >
            Add Item
          </button>
        </div>
        <div className='flex flex-col'>
          <input
            value={enteredDate}
            onChange={dateChangeHandler}
            className='text-black outline-none p-1 rounded-md'
            type='date'
            name=''
            id='date'
          />
          <label htmlFor='date'>Date</label>
        </div>
      </form>
    </div>
  );
};

export default Form;
