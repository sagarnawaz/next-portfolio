import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <div id='skills' className='w-full p-4 sm:p-8 bg-gray-100 dark:bg-gray-900 text-black dark:text-white'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-lg sm:text-xl tracking-widest uppercase text-blue-600 dark:text-blue-400 text-center'>Skills</p>
        <h2 className='py-4 text-2xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-gray-200 text-center'>What I Can Do</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
          {[
            { name: 'HTML', src: '/skills/html.png' },
            { name: 'CSS', src: '/skills/css.png' },
            { name: 'JavaScript', src: '/skills/javascript.png' },
            { name: 'React', src: '/skills/react.png' },
            { name: 'Tailwind', src: '/skills/tailwind.png' },
            { name: 'Next.js', src: '/skills/Next.js.png' },
            { name: 'GitHub', src: '/skills/github1.png' }
          ].map((skill, index) => (
            <div key={index} className='p-4 sm:p-6 rounded-xl hover:scale-105 transition-transform duration-300 shadow-md shadow-gray-800 bg-gray-100 dark:bg-gray-800 flex flex-col items-center'>
              <div className='flex flex-col items-center justify-center'>
                <Image 
                  src={skill.src} 
                  width={64} 
                  height={64} 
                  alt={skill.name}
                  className='w-10 h-10 sm:w-16 sm:h-16 object-contain'
                />
                <h3 className='mt-2 text-sm sm:text-base text-gray-800 dark:text-gray-200 text-center'>{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
