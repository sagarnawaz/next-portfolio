import React from 'react';
import Image from 'next/image';
import bloggingApp from '../public/projects/blogging-app.png';
import startupPlatform from '../public/projects/startup.png';
import ProjectItem from './ProjectItem';
import nikeImg from '../public/projects/nike.png';
import library from '../public/projects/library.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white'>
      <div className='max-w-[1240px] mx-auto px-2 '>
        <p className='text-xl tracking-widest uppercase text-blue-600 dark:text-blue-400'>Projects</p>
        <h2 className='py-4 text-gray-800 dark:text-gray-200'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem 
            title='Personal Blogging' 
            backgroundImg={bloggingApp} 
            projectUrl='https://blogging-app-weld-iota.vercel.app/'
          />
          <ProjectItem 
            title='Startup Platform' 
            backgroundImg={startupPlatform} 
            projectUrl='https://startup-one-gold.vercel.app/'
          />
          <ProjectItem 
            title='Nike' 
            backgroundImg={nikeImg} 
            projectUrl='https://nike-app-green.vercel.app/'
          />
          <ProjectItem 
            title='Library Management' 
            backgroundImg={library} 
            projectUrl='https://library-management-bice-three.vercel.app/'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
