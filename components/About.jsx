import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-10 bg-gray-100 dark:bg-gray-900 text-black dark:text-white'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-blue-600 dark:text-blue-400'>About</p>
          <h2 className='text-gray-800 dark:text-gray-200'>Who I Am</h2>
          <p className='py-2 text-gray-700 dark:text-gray-300'>I am not a normal developer</p>
          <p className='py-2 text-gray-700 dark:text-gray-300'>
            A dedicated developer who is always willing to take the lead 
            in challenging scenarios. I have a passion for achieving goals and the flexibility 
            to work well with a team. I've finished learning this energizing expertise, and 
            I have a firm grasp of HTML, CSS, JavaScript, React, and Next.js.
            A freelancer who provides service for digital programming
            and design content needs for all businesses with more than
            one year of experience.
          </p>
          <p className='py-2 text-blue-600 dark:text-blue-400 underline cursor-pointer'>Check out some of my latest projects</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-gray-600 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img className='rounded-xl' src='https://images.pexels.com/photos/6424588/pexels-photo-6424588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='About Image'/>
        </div>
      </div>
    </div>
  );
};

export default About;
