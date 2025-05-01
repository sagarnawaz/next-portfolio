import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { GithubOutlined, LinkedinOutlined, MailOutlined, FilePdfOutlined } from '@ant-design/icons';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleShadow = () => {
      setShadow(window.scrollY >= 90);
    };
    window.addEventListener('scroll', handleShadow);
    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={`fixed w-full h-20 ${shadow ? 'shadow-xl' : ''} z-[100] bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300`}
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <a href="/">
          <Image src="/assets/mylogo.png" alt="Logo" width={200} height={100} />
        </a>

        <div>
          <ul className="hidden md:flex items-center">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <a href="/">Home</a>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <a href="/#about">About</a>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <a href="/#skills">Skills</a>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <a href="/#projects">Projects</a>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <a href="/#contact">Contact</a>
            </li>
            <li className="ml-10">
              <ThemeToggle />
            </li>
          </ul>

          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div
          className={`fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-300 p-10 ease-in duration-500 ${
            nav ? '' : 'left-[-100%]'
          }`}
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <a href="/">
                <Image src="/assets/mylogo.png" alt="Logo" width={87} height={35} />
              </a>
              <div onClick={handleNav} className="rounded-full border border-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 dark:border-gray-600 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Let's build something legendary together</p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <a href="/">Home</a>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <a href="/#about">About</a>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <a href="/#skills">Skills</a>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <a href="/#projects">Projects</a>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <a href="/#contact">Contact</a>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
              <ThemeToggle />
              </li>

            </ul>

            <div className="pt-40">
              <p className="uppercase tracking-widest text-gray-600 dark:text-gray-400">Let's Connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a href="https://www.linkedin.com/in/sagar-nawaz-12081223a/">
                  <div className="rounded-full border border-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <LinkedinOutlined />
                  </div>
                </a>
                <a href="https://github.com/sagarnawaz">
                  <div className="rounded-full border border-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <GithubOutlined />
                  </div>
                </a>
                <a href="mailto:sagarnawaz44@gmail.com">
                  <div className="rounded-full border border-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <MailOutlined />
                  </div>
                </a>
                <a href="https://drive.google.com/file/d/1nrWeAAGMx6n7aMEIPKDpaaO5Xp73Rzrh/view?usp=drive_link">
                  <div className="rounded-full border border-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FilePdfOutlined />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
