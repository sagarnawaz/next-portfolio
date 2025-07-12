import React from 'react';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { SOCIAL_LINKS, PERSONAL_INFO, CV_FILE } from '../constants';
import { FaExternalLinkAlt } from 'react-icons/fa';

const SocialLink = ({ href, icon: Icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <div className='rounded-full border border-gray-400 p-2 sm:p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
      <Icon className='text-lg sm:text-xl' />
    </div>
  </a>
);

const SOCIAL_ICONS = [
  { href: SOCIAL_LINKS.linkedin, icon: LinkedinOutlined },
  { href: SOCIAL_LINKS.github, icon: GithubOutlined },
  { href: SOCIAL_LINKS.email, icon: MailOutlined },
];

const Main = () => {
  const [text] = useTypewriter({
    words: ['Front-End Developer', 'Software Engineer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div>
      <div id='home' className='w-full text-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white pt-8 pb-8 sm:pt-16 sm:pb-16'>
        <div className='max-w-[1240px] w-full mx-auto p-4 sm:p-8 flex flex-col justify-center items-center'>
          <div className='max-w-[800px] w-full mx-auto'>
            <p className='uppercase text-xs sm:text-sm tracking-widest text-gray-600 dark:text-gray-400 mt-2'>
              WELCOME TO {PERSONAL_INFO.name.toUpperCase()}'S PORTFOLIO
            </p>
            <div className='App'>
              <h1 className='py-2 sm:py-4 text-3xl sm:text-4xl lg:text-5xl text-blue-700 dark:text-blue-400 font-bold drop-shadow-[0_0_10px_rgba(30,58,138,0.5)]'>
                Hi, I'm <span className='text-blue-600 dark:text-blue-400'>{PERSONAL_INFO.name}</span>
              </h1>
              <h1 className='py-2 text-3xl sm:text-4xl lg:text-5xl text-gray-800 dark:text-gray-200 font-bold'>
                A {text}
              </h1>
              <Cursor cursorColor='red' />
            </div>
            <p className='py-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-[90%] sm:max-w-[80%] lg:max-w-[70%] m-auto'>
              I'm a front-end web developer specializing in building and
              occasionally designing exceptional digital experiences. Currently,
              I'm focused on building responsive front-end web applications while
              learning back-end technologies.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4'>
              <div className='flex items-center space-x-4'>
                {SOCIAL_ICONS.map((social, index) => (
                  <SocialLink key={index} {...social} />
                ))}
              </div>
              <a
                href={CV_FILE}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-900 to-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-bold shadow-lg'
              >
                <FaExternalLinkAlt />
                <span>View CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
