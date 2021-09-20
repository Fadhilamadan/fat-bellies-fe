import React from 'react';

const Navbar = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-700 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <span className="text-sm font-bold l eading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
            Fat Bellies
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
