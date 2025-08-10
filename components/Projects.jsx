import React from 'react';
import Image from 'next/image';
import bloggingApp from '../public/projects/blogging-app.png';
import startupPlatform from '../public/projects/startup.png';
import ProjectItem from './ProjectItem';
import nikeImg from '../public/projects/nike.png';
import library from '../public/projects/library.png';
import lms from '../public/projects/lms.png';

const Projects = () => {
  return (
    <div id='projects' className='w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white'>
      <div className='max-w-[1240px] mx-auto p-4 sm:p-8'>
        <p className='text-lg sm:text-xl tracking-widest uppercase text-blue-600 dark:text-blue-400 text-center'>Projects</p>
        <h2 className='py-4 text-2xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-gray-200 text-center'>What I"ve Built</h2>
        <div className='grid sm:grid-cols-2 gap-6 sm:gap-8'>
          <ProjectItem 
            title='LMS Admin' 
            backgroundImg={lms} 
            projectUrl='https://lms-admin-bay.vercel.app/'
          />
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
