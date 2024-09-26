import React, { useState } from 'react';
import { Github, Linkedin, Mail, Moon, Sun, ExternalLink } from 'lucide-react';

const projects = [
  { 
    id: 1, 
    title: 'E-commerce Vehicle Rental', 
    description: 'Built a scalable e-commerce platform using React, Redux, and Node.js',
    link: 'https://github.com/mahendraiqbal/vehicle-rental-react'
  },
  { 
    id: 2, 
    title: 'E-commerce Coffee Shop', 
    description: 'Built a scalable e-commerce platform using React, Redux, and Node.js',
    link: 'https://github.com/okidwijaya/coffee-good-meals'
  },
  { 
    id: 3, 
    title: 'E-wallet and Dashboard', 
    description: 'Built a scalable e-commerce platform using Next, Redux',
    link: 'https://github.com/mahendraiqbal/zwallet'
  },
  { 
    id: 4, 
    title: 'E-commerce Home Appliance Store', 
    description: 'Built a scalable e-commerce platform using React, Redux, and Node.js',
    link: 'hhttps://github.com/mahendraiqbal/raz-front-end'
  },
  { 
    id: 5, 
    title: 'Mobile App Vehicle Rental', 
    description: 'Created a cross-platform mobile app using React Native and Firebase',
    link: 'https://github.com/mahendraiqbal/Native_VehicleRental'
  },
  { 
    id: 6, 
    title: 'Mobile App E-Book Platform', 
    description: 'Created a cross-platform mobile app using Flutter. You can download at Play Store "Troya Academic Platform"',
    link: 'https://gitlab.com/troya-academic-platform/tap-student-android'
  },
  { 
    id: 7, 
    title: 'Motorcycle Management Application', 
    description: 'Created a cross-platform mobile app using React Native',
    link: 'https://github.com/mahendraiqbal/PKB'
  },
];

const skills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Redux', 'Next', 'REST API', 'React Native', 'Flutter', 'Tailwind CSS'];

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 relative">
          <button
            onClick={toggleDarkMode}
            className={`absolute top-0 right-0 p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-800'}`}
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <h1 className="text-4xl font-bold mb-2 animate-fade-in">Muhammad Iqbal Firdaus Mahendra</h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} animate-fade-in`}>Software Engineer</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/mahendraiqbal" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-400 hover:text-gray-500'} transition-colors duration-200`}>
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/mahendraiqbal" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-400 hover:text-gray-500'} transition-colors duration-200`}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:mahendraiqbal42@gmail.com" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-400 hover:text-gray-500'} transition-colors duration-200`}>
              <Mail size={24} />
            </a>
          </div>
        </header>

        <section className="mb-12 animate-fade-in">
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>About Me</h2>
          <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
          Software Engineer with experience in Javascript, PHP and Dart. 
          I have developed a strong foundation in both frontend and backend. 
          My expertise includes building dynamic web applications with Javascript and PHP also using Dart and Javascript to build Android Application.
          </p>
        </section>

        <section className="mb-12 animate-fade-in">
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a 
                key={project.id} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg group`}
              >
                <div className="flex justify-between items-start">
                  <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'} group-hover:text-blue-500 transition-colors duration-200`}>
                    {project.title}
                  </h3>
                  <ExternalLink size={18} className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} group-hover:text-blue-500 transition-colors duration-200`} />
                </div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{project.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12 animate-fade-in">
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className={`${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} rounded-full px-3 py-1 text-sm font-semibold transition-colors duration-200`}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="animate-fade-in">
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Contact</h2>
          <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
            Feel free to reach out to me at <a href="mailto:mahendraiqbal42.com" className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} hover:underline transition-colors duration-200`}>mahendraiqbal42@gmail.com</a>
          </p>
          <p>
            Phone Number : 081215806730
          </p>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;