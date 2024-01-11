import React from 'react';

const Project = () => {
  return (
    <div className="grid max-w-[900px] mx-auto p-4 h-screen grid-cols-1 grid-rows-3 gap-4">
      <div className='bg-blue-200 row-span-2 rounded w-full'></div>
      <div className='bg-blue-200 grid gap-4 p-4 grid-cols-2 grid-rows-2 rounded w-full'>
        <div className='bg-blue-300 rounded'></div>
        <div className='bg-blue-300 rounded'></div>
        <div className='bg-blue-300 rounded'></div>
        <div className='bg-blue-300 rounded'></div>
      </div>
    </div>
  );
};

export default Project;
