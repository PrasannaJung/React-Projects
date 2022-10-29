import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className='bg-[#2f2323] px-6 py-3 flex justify-between items-center'>
      <h1 className='text-3xl font-bold'>Eventize</h1>
      <nav>
        <ul className='flex gap-4 text-xl'>
          <li>
            <Link href={"/"}>Featured</Link>
          </li>
          <li>
            <Link href={"/events"}>All Events</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
