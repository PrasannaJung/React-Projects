import React from 'react';

const Money = () => {
  return (
    <div className='max-w-xl bg-slate-900 p-6 ml-4 rounded-md mb-4 text-white'>
      <div className='flex justify-center items-center flex-col'>
        <progress className='rounded-md mt-3' id='money' value='32' max='100'>
          {' '}
          32%{' '}
        </progress>
        <label className='mt-1 mb-3' htmlFor='money'>
          Money
        </label>
      </div>
      <div className='flex justify-between'>
        <div className='flex flex-col items-center'>
          <p>Total Budget</p>
          <p>Rs.10000</p>
        </div>
        <div className='flex flex-col items-center'>
          <p>Total Spent</p>
          <p>Rs.2500</p>
        </div>
        <div className='flex flex-col items-center'>
          <p>Amount Left</p>
          <p>Rs.7500</p>
        </div>
      </div>
    </div>
  );
};

export default Money;
