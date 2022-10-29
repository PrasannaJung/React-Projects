import React, { useState } from "react";
import FeaturedCards from "../components/FeaturedCards";
import { getFeaturedEvents } from "../constants/data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1 className='text-center text-4xl font-bold mt-8'>Featured Events</h1>
      <FeaturedCards featuredEvents={featuredEvents} />
    </div>
  );
}
