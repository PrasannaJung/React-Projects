import React from 'react';

const Money = () => {
  return (
    <div className='max-w-xl bg-slate-900 p-6 ml-4 rounded-md mb-4 text-white'>
      <div className='flex justify-between'>
        <div className='flex flex-col items-center'>
          <p>Total Earnings</p>
          <p>Rs.10000</p>
        </div>
        <div className='flex flex-col items-center'>
          <p>Total Spent</p>
          <p>Rs.2500</p>
        </div>
        <div className='flex flex-col items-center'>
          <p>Amount Left</p>
          <p>Rs.5000</p>
        </div>
      </div>
    </div>
  );
};

export default Money;
