import React, { useEffect, useRef } from 'react';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';

export default function App() {

  return (
    <div className='flex-col w-screen bg-gradient-to-r from-dark-purple to-gray-900 justify-center min-h-screen'>
      <div className='max-w-[900px] mx-auto mt-13 p-2 w-full text-center'>
        <Hero />
        <Projects />
      </div>
    </div>
  );
}
