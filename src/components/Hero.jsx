import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Hero() {
  return (
    <div id='home' className='w-full p-2 mt-8'>
      <div className="flex justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-black mb-2">Ian Cook</h1>
          <p className="text-2xl text-gray-800 mb-4">
            Software Engineer | Web Developer
          </p>
          <p className='text-gray-700'>
            Hi, I'm Ian Cook. I'm a software engineer and web developer graduating from Central Michigan University with a Computer Science degree in May 2024. I will be moving back to the Grand Rapids area after graduation, and am looking for a full-time position in software engineering or web development. I have a strong passion for minimalistic, responsive, user-friendly design. A few of my projects, with the used techonologies, are listed below. Feel free to reach out to me on any of my social media platforms listed below.
          </p>
          <div className="flex mt-3 justify-center space-x-4">
            <a href="https://twitter.com/Chefc0ok" className="text-blue-500 hover:underline">
              <FaTwitter size={32} className="hover:animate-bounce" />
            </a>
            <a href="https://github.com/IanCo0k" className="text-gray-800 hover:underline">
              <FaGithub size={32} className="hover:animate-bounce" />
            </a>
            <a href="https://www.linkedin.com/in/ian-cook-854896205/" className="text-blue-700 hover:underline">
              <FaLinkedin size={32} className="hover:animate-bounce" />
            </a>
            <a href="https://www.instagram.com/ianco0k/" className="text-purple-600 hover:underline">
              <FaInstagram size={32} className="hover:animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
