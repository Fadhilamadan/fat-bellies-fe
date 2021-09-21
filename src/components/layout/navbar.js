import React from 'react';

const Navbar = () => {
  return (
    <div className="container mx-auto my-4 px-4">
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
        <div className="flex-1 px-2 mx-2">
          <span className="text-lg font-bold">Fat Bellies</span>
        </div>
        <div className="flex-none px-2 mx-2 lg:flex">
          <div className="flex items-stretch">
            <a className="btn btn-ghost btn-sm rounded-btn">Create Branch</a>
            <a className="btn btn-ghost btn-sm rounded-btn">Create Buffet</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
