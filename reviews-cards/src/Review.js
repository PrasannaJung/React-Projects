import React, { useState } from 'react';
import people from './data';

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);

  const getNextPerson = () => {
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };
  console.log(people.length);

  const getPreviousPerson = () => {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(prevIndex => prevIndex - 1);
    }
  };

  const { name, job, image, text } = people[index];
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt='' className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={getPreviousPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={getNextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button
        className='random-btn'
        onClick={() => {
          const randNum = Math.floor(Math.random() * people.length);
          setIndex(randNum);
        }}
      >
        Surprise
      </button>
    </article>
  );
};

export default Review;
