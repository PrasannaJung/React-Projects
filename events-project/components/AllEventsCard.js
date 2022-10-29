import React from "react";
import Image from "next/legacy/image";

const AllEvents = props => {
  return (
    <div className='flex w-1/2 mx-auto bg-[#BE5E5E]'>
      <div className='flex-1 relative'>
        <Image
          src={"/" + props.image}
          layout='fill'
          alt={"Venue"}
          objectFit='cover'
        />
      </div>
      <div className='flex-1 p-6'>
        <h1 className='text-xl font-bold'>{props.title}</h1>
        <div>
          <p>{props.description}</p>
        </div>
        <div>
          <p>Venue</p>
          <p>{props.location}</p>
        </div>
        <div>
          <p>Date</p>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
