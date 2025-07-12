import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import ThemeToggle from './ThemeToggle';
import { SOCIAL_LINKS } from '../constants';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];

const NavLink = ({ href, label, onClick }) => (
  <li className="text-sm lg:text-base uppercase hover:border-b transition-all duration-300">
    <a href={href} onClick={onClick}>{label}</a>
  </li>
);

const SocialLink = ({ href, icon: Icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <div className="rounded-full border border-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
      <Icon />
    </div>
  </a>
);

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => setShadow(window.scrollY >= 90);
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  const handleNav = () => setNav(!nav);

  return (
    <div
      className={`fixed w-full h-20 ${shadow ? 'shadow-xl' : ''} z-[100] bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300`}
    >
      <div className="flex justify-between items-center w-full h-full px-4 sm:px-6 lg:px-16">
        <a href="/" className="flex items-center">
          <Image 
            src="/assets/mylogo.png" 
            alt="Logo" 
            width={150} 
            height={75} 
            className="w-auto h-auto sm:w-[175px] lg:w-[200px]"
            priority 
          />
        </a>

        {/* Desktop Navigation */}
        <div>
          <ul className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.label} {...item} />
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>

          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-black/70 transition-opacity duration-300 ${nav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div
          className={`fixed left-0 top-0 w-[85%] sm:w-[60%] md:w-[45%] h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-300 p-6 sm:p-10 transform transition-transform duration-300 ease-in-out ${
            nav ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-6">
            <a href="/">
              <Image src="/assets/mylogo.png" alt="Logo" width={87} height={35} priority />
            </a>
            <button onClick={handleNav} className="rounded-full border border-gray-400 p-3">
              <AiOutlineClose />
            </button>
          </div>

          <div className="border-b border-gray-300 dark:border-gray-600 pb-4">
            <p className="w-[85%] md:w-[90%]">Let's build something legendary together</p>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="py-8">
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <NavLink 
                  key={item.label} 
                  {...item} 
                  onClick={() => setNav(false)}
                />
              ))}
              <li className="py-4">
                <ThemeToggle />
              </li>
            </ul>
          </nav>

          {/* Social Links */}
          <div className="mt-auto pt-8">
            <p className="uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-4">
              Let's Connect
            </p>
            <div className="flex items-center justify-between max-w-[200px]">
              <SocialLink href={SOCIAL_LINKS.linkedin} icon={LinkedinOutlined} />
              <SocialLink href={SOCIAL_LINKS.github} icon={GithubOutlined} />
              <SocialLink href={SOCIAL_LINKS.email} icon={MailOutlined} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
