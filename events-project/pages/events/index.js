import React from "react";
import AllEventsCards from "../../components/AllEventsCards";
import { getAllEvents } from "../../constants/data";

const index = () => {
  const allEvents = getAllEvents();

  return (
    <div>
      <AllEventsCards allEvents={allEvents} />
    </div>
  );
};

export default index;
