import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <header className=' py-5 flex justify-between items-center px-32 sticky top-0'>
      <h1 className='text-3xl font-bold'>Eventize</h1>
      <nav>
        <ul className='flex gap-4 text-xl'>
          <li>
            <Link href={"/events"}>All Events</Link>
          </li>
          <li>
            <Link href={"/your-events"}>Your Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
