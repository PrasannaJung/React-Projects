import React from "react";
import AllEventsCard from "./AllEventsCard";

const AllEventsCards = props => {
  return (
    <div className='flex flex-col items-center gap-12 mt-20'>
      {props.allEvents.map(fEvent => {
        return (
          <AllEventsCard
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
  );
};

export default AllEventsCards;
