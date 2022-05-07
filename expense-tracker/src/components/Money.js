import React from 'react';

const Money = () => {
  return (
    <div className='max-w-xl flex-1 bg-slate-900 p-6 ml-4 rounded-md mb-4 {props.className}'>
      <div className='flex'>
        <div>
          <p>Total Earnings</p>
          <p>Rs.10000</p>
        </div>
        <div>
          <p>Total Spent</p>
          <p>Rs.2500</p>
        </div>
        <div>
          <p>Amount Left</p>
          <p>Rs.5000</p>
        </div>
      </div>
    </div>
  );
};

export default Money;
