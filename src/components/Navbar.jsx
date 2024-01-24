import React from 'react'
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='w-full text-xl px-12 py-8 flex justify-between z-10'>
        <Link to='/'>
            <h1 className='text-3xl text-seasalt font-semibold flex items-center'>
                <FaHome className='mr-2' />
            </h1>
        </Link>
        
        <div className='flex space-x-12'>
            <Link to='/'>
                <button className='text-gray-300 rounded-full hover:bg-oxford-blue hover:text-seasalt transition-colors'>Home</button>
            </Link>
            <Link to='/projects'>
                <button className='text-gray-300 rounded-lg hover:bg-oxford-blue hover:text-seasalt transition-colors'>Projects</button>
            </Link>
            <Link to='/contact'>
                <button className='text-gray-300 rounded-lg hover:bg-oxford-blue hover:text-seasalt transition-colors'>Contact</button>
            </Link>
            <Link to='/resume'>
                <button className='text-gray-300 rounded-lg hover:bg-oxford-blue hover:text-seasalt transition-colors'>Resume</button>
            </Link>
        </div>
    </div>
  )
}
