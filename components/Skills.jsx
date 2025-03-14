import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 bg-gray-100 dark:bg-gray-900 text-black dark:text-white'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-blue-600 dark:text-blue-400'>Skills</p>
        <h2 className='py-4 text-gray-800 dark:text-gray-200'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {[
            { name: 'HTML', src: '/skills/html.png' },
            { name: 'CSS', src: '/skills/css.png' },
            { name: 'JavaScript', src: '/skills/javascript.png' },
            { name: 'React', src: '/skills/react.png' },
            { name: 'Tailwind', src: '/skills/tailwind.png' },
            { name: 'Next.js', src: '/skills/Next.js.png' },
            { name: 'GitHub', src: '/skills/github1.png' }
          ].map((skill, index) => (
            <div key={index} className='p-6 shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300 bg-white dark:bg-gray-800'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={skill.src} width={64} height={64} alt={skill.name} />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3 className='text-gray-800 dark:text-gray-200'>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
