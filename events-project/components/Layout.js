import React from "react";
import Navigation from "./Navigation";

const Layout = props => {
  return (
    <div className='min-h-screen bg-main-gradient text-white'>
      <Navigation />
      {props.children}
    </div>
  );
};

export default Layout;
