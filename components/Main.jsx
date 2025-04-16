import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { GithubOutlined, LinkedinOutlined, MailOutlined, FilePdfOutlined } from '@ant-design/icons';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Main = () => {
  const [text] = useTypewriter({
    words: ['Front-End Developer', 'Software Engineer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div id='home' className='w-full h-screen text-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600 dark:text-gray-400 mt-2'>
            WELCOME TO SAGAR'S PORTFOLIO
          </p>
          <div className='App'>
            <h1 className='py-4 text-gray-800 dark:text-gray-200'>
              Hi, I'm <span className='text-blue-600 dark:text-blue-400'>Sagar</span>
            </h1>
            <h1 className='py-2 text-gray-800 dark:text-gray-200'>A {text}</h1>
            <Cursor cursorColor='red' />
          </div>
          <p className='py-4 text-gray-700 dark:text-gray-300 max-w-[70%] m-auto'>
            I'm a front-end web developer specializing in building and
            occasionally designing exceptional digital experiences. Currently,
            I'm focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a href='https://www.linkedin.com/in/sagar-nawaz-12081223a/' target='_blank' rel='noopener noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <LinkedinOutlined />
              </div>
            </a>
            <a href='https://github.com/sagarnawaz' target='_blank' rel='noopener noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <GithubOutlined />
              </div>
            </a>
            <a href='mailto:sagarnawaz44@gmail.com'>
              <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <MailOutlined />
              </div>
            </a>
            <a href='https://drive.google.com/file/d/1nrWeAAGMx6n7aMEIPKDpaaO5Xp73Rzrh/view?usp=drive_link'>
              <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FilePdfOutlined />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
