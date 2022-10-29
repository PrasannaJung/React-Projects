import React from "react";
import Navigation from "./Navigation";

const Layout = props => {
  return (
    <div className='min-h-screen bg-[#180B0B] text-white'>
      <Navigation />
      {props.children}
    </div>
  );
};

export default Layout;
