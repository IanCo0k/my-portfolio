import React, { useRef } from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import cfb from '../assets/cfb.png';
import northern from '../assets/northern.png';
import portfolio from '../assets/portfolio.png';
import sunset from '../assets/sunset.png';
import college from '../assets/college.png';
import gridiron from '../assets/gridiron.png';
import fawn from '../assets/fawn.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'CFB Grids',
    description: 'A daily college football trivia game that has garnered over 200,000 views since August 2023.',
    technologies: ['React', 'Tailwind CSS', 'JSON', 'Google Firebase', 'Netlify'],
    liveDemoLink: 'https://cfbgrids.com/',
    githubLink: 'https://github.com/IanCo0k/cfb-grids',
    screenshot: cfb,
  },
  {
    title: 'Fawn Crest Golf Course',
    description: 'A demo website built for a golf course in Wellston, Michigan.',
    technologies: ['Next.js', 'Tailwind CSS', 'Git', 'Vercel'],
    liveDemoLink: 'https://fawn-8rs4n87eg-ianco0ks-projects.vercel.app/',
    githubLink: 'https://github.com/IanCo0k/fawn',
    screenshot: fawn,
  },
  {
    title: 'Gridiron Insights',
    description: 'A data visualization website that allows you to compare NFL players against one another.',
    technologies: ['React', 'Tailwind CSS', 'JSON', 'Google Firebase', 'Netlify', 'User Authentication', 'Data Visualization'],
    liveDemoLink: 'https://gridiron-insights.netlify.app/',
    githubLink: 'https://github.com/IanCo0k/GridironInsights',
    screenshot: gridiron,
  },
  {
    title: 'Northern Mallard Supply Co',
    description: 'A school project website built for friends starting their own thrifting business.',
    technologies: ['React', 'Tailwind CSS', 'Git', 'Netlify'],
    liveDemoLink: 'https://northern-mallard.netlify.app/',
    githubLink: 'https://github.com/IanCo0k/northern',
    screenshot: northern,
  },
  {
    title: 'Portfolio',
    description: 'My personal portfolio website showcasing my projects and skills (You are on it right now...)',
    technologies: ['React', 'Tailwind CSS', 'Git', 'Netlify'],
    liveDemoLink: 'https://ian-cook-portfolio.netlify.app/',
    githubLink: 'https://github.com/IanCo0k/my-portfolio',
    screenshot: portfolio,
  },
  {
    title: 'SunRise Tech',
    description: 'A school project website built for a fictional tech company called SunRise Tech.',
    technologies: ['React', 'Tailwind CSS', 'Git', 'Netlify', 'Firebase'],
    liveDemoLink: 'https://sunrise-tech.netlify.app/',
    githubLink: 'https://github.com/IanCo0k/sunrise',
    screenshot: sunset,
  },
  {
    title: 'College Where?',
    description: "Side project to satisfy my roommates and I's desire to flex our knowledge of where NBA players went to college.",
    technologies: ['React', 'Tailwind CSS', 'Python', 'Firebase', 'Git'],
    liveDemoLink: 'https://guess-the-college.netlify.app/',
    githubLink: 'https://github.com/IanCo0k/college',
    screenshot: college,
  }
];

const Projects = () => {
  const projectRefs = useRef([]);

  useGSAP(() => {
    projectRefs.current.forEach((projectRef, index) => {
      gsap.from(projectRef, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: projectRef,
          start: "top 80%",
        },
      });
    });
  });

  return (
    <div id='projects' className='mt-8 p-2'>
      <h1 className='text-4xl text-seasalt underline mb-8'>Projects</h1>
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => (projectRefs.current[index] = el)}
          className={`flex flex-col md:flex-row mb-4 p-4 border rounded-lg bg-oxford-blue hover:bg-dark-purple transition-colors`}
        >
          <div className="md:w-1/3">
            <img src={project.screenshot} alt={project.title} className="w-full rounded h-auto" />
          </div>
          <div className="md:w-2/3 md:pl-4">
            <h2 className="text-3xl pt-2 text-seasalt font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-2">{project.description}</p>
            <div className="flex flex-wrap items-center space-x-2 mb-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-gray-300 rounded-full text-gray-800 text-sm mb-2 mr-2"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between md:justify-start md:space-x-4 mt-4">
              <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Live Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
      <hr className='mt-10 mb-10' />
      <h2 className='text-center text-seasalt mb-10 text-xl'>Romans 8:28</h2>
    </div>
  );
};

export default Projects;
