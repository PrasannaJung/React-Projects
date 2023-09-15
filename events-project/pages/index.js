import React, { useState } from "react";
import FeaturedCards from "../components/FeaturedCards";
import { getFeaturedEvents } from "../constants/data";
import Hero from "../components/Hero";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <Hero />
      <FeaturedCards featuredEvents={featuredEvents} />
    </>
  );
}
