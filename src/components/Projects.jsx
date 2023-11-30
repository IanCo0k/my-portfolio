import React from 'react';
import cfb from '../assets/cfb.png';
import northern from '../assets/northern.png';
import portfolio from '../assets/portfolio.png';

const projects = [
  {
    title: 'CFB Grids',
    description: 'A daily college football trivia game that has garnered over 200,000 views since August 2023.',
    technologies: ['React', 'Tailwind CSS', 'JSON', 'Google Firebase', 'Netlify'],
    liveDemoLink: 'https://cfbgrids.com/',
    githubLink: 'https://github.com/IanCo0k/cfb-grids',
    screenshot: cfb, // Replace with your actual screenshot path
  },
  {
    title: 'Northern Mallard Supply Co',
    description: 'A school project website built for friends starting their own thrifting business.',
    technologies: ['React', 'Tailwind CSS', 'Git', 'Netlify'],
    liveDemoLink: 'https://northern-mallard.netlify.app/',
    githubLink: 'https://github.com/IanCo0k/northern',
    screenshot: northern, // Replace with your actual screenshot path
  },
  {
    title: 'Portfolio',
    description: 'My personal portfolio website showcasing my projects and skills (You are on it right now...)',
    technologies: ['React', 'Tailwind CSS', 'Git', 'Netlify'],
    liveDemoLink: 'https://ian-cook-portfolio.netlify.app/',
    githubLink: 'https://github.com/IanCo0k/my-portfolio',
    screenshot: portfolio, // Replace with your actual screenshot path
  },
];

const ProjectCard = ({ project, index }) => {
  const cardColors = ['bg-blue-100', 'bg-green-100', 'bg-purple-100']; // Different background colors

  return (
    <div className={`flex flex-col md:flex-row mb-4 p-4 border rounded-lg ${cardColors[index]}`}>
      <div className="md:w-1/3">
        <img src={project.screenshot} alt={project.title} className="w-full h-auto" />
      </div>
      <div className="md:w-2/3 md:pl-4">
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-gray-700 mb-2">{project.description}</p>
        <div className="flex items-center space-x-2 mb-2">
          <div className="flex items-center space-x-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-gray-300 rounded-full text-gray-800 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Live Demo
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id='projects' className='mt-8'>
        <h1 className='text-4xl text-gray-800 underline mb-8'>Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
            <hr className='mt-10 mb-10' />
            
            <h2 className='text-center mb-10 text-xl'>Romans 8:28</h2>

    </div>
  );
};

export default Projects;
