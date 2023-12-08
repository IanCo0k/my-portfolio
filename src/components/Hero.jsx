import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Hero() {
  return (
    <div id='home' className='w-full p-2 mt-8'>
      <div className="flex justify-center">
        <div className="text-center">
          <div className='relative'>
            <img
              src="https://media.licdn.com/dms/image/D5603AQGoG0oPOOzUNQ/profile-displayphoto-shrink_800_800/0/1673552040979?e=2147483647&v=beta&t=r9oXKngbGbRsZbVYAOigVQ1wsjgohGZ0k6QZzpDiP9Y"
              alt="Profile"
              className="mx-auto z-1 rounded-full w-32 h-32 mb-4"
            />
          </div>
          <h1 className="text-7xl font-bold text-seasalt mb-2">Ian Cook</h1>
          <p className="text-2xl text-gray-300 mb-4">
            Software Engineer | Web Developer
          </p>
          <p className='text-gray-400'>
            Hi, I'm Ian Cook. I'm a software engineer and web developer graduating from Central Michigan University with a Computer Science degree in May 2024. I will be moving back to the Grand Rapids area after graduation, and am looking for a full-time position in software engineering or web development. I have a strong passion for minimalistic, responsive, user-friendly design. A few of my projects, with the used techonologies, are listed below. Feel free to reach out to me on any of my social media platforms listed below.
          </p>
          <div className="flex mt-3 justify-center space-x-4">
            <a href="https://twitter.com/Chefc0ok" className="text-seasalt bg-oxford-blue p-4 rounded-full hover:bg-seasalt hover:text-oxford-blue hover:underline">
              <FaTwitter size={32} />
            </a>
            <a href="https://github.com/IanCo0k" className="text-seasalt bg-oxford-blue p-4 rounded-full hover:bg-seasalt hover:text-oxford-blue hover:underline">
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/ian-cook-854896205/" className="text-seasalt bg-oxford-blue p-4 rounded-full hover:bg-seasalt hover:text-oxford-blue hover:underline">
              <FaLinkedin size={32} />
            </a>
            <a href="https://www.instagram.com/ianco0k/" className="text-seasalt bg-oxford-blue p-4 rounded-full hover:bg-seasalt hover:text-oxford-blue hover:underline">
              <FaInstagram size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
