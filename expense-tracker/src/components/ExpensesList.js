import React from 'react';

const ExpensesList = props => {
  return (
    <div className='bg-slate-900 flex-1 p-3 rounded-sm text-white'>
      {!props.myExpenses.length && (
        <h1>No Expenses. Add something via the input form!!</h1>
      )}

      <ul className='flex flex-col gap-4'>
        {props.myExpenses.map(expense => {
          return (
            <li
              key={props.myExpenses.indexOf(expense)}
              className='flex justify-between bg-gray-600 py-1 px-2'
            >
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
