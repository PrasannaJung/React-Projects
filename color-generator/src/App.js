import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

const App = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Hello');
  };

  return (
    <>
      <section className='container'>
        <h3>Color generator</h3>
        <form action='' onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={e => setColor(e.target.value)}
            placeholder='#f15025'
          />
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        <h4>List goes here</h4>
      </section>
    </>
  );
};

export default App;
