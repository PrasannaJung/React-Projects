import React from "react";
import EventCard from "./FeaturedCard";

const FeaturedCards = props => {
  return (
    <>
      <h1 className='text-4xl text-center'>Featured Events</h1>
      <div className='flex flex-col items-center gap-12 mt-20'>
        {props.featuredEvents.map(fEvent => {
          return (
            <EventCard
              key={fEvent.id}
              title={fEvent.title}
              location={fEvent.location}
              date={fEvent.date}
              image={fEvent.image}
              description={fEvent.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default FeaturedCards;
