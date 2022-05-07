import React, { useState } from 'react';

const ExpensesList = props => {
  return (
    <div className='bg-slate-900 flex-1 p-3 rounded-sm'>
      <ul className='flex flex-col gap-4'>
        {props.myExpenses.map(expense => {
          return (
            <li className='flex justify-between bg-slate-400 py-1 px-2'>
              <p>{expense.expenseDate.toString()}</p>
              <p>{expense.expense}</p>
              <p>Rs {expense.amount}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExpensesList;
