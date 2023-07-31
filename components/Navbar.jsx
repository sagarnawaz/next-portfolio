import Image from 'next/image';
import React, {useState, useEffect} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {useRouter} from 'next/router'
import { GithubOutlined  } from '@ant-design/icons';
import { LinkedinOutlined  } from '@ant-design/icons';
import { MailOutlined  } from '@ant-design/icons';
import { FilePdfOutlined   } from '@ant-design/icons';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [Shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('#ecf0f3')
  const [linkColor, setLinkColor] = useState('#1f2937')
  const router = useRouter()
  useEffect(()=>{
    if (
      router.asPath === '/portfolio' ||
      router.asPath === '/budget' 
    ){
      setNavBg('transparent')
      setLinkColor('#ecf0f3')
    } else {
      setNavBg('ecf0f3')
      setLinkColor('ecf0f3')
    }
  }, [router])

  const handleNav = () => {
    setNav(!nav)
  };

  useEffect(() => {
    const handleShadow =()=> {
      if (window.scrollY >= 90 ) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    };
    window.addEventListener('scroll',handleShadow);
    return () => {
      window.removeEventListener('scroll',handleShadow);
    }
  }, []);
  return (
    <div style={{backgroundColor: '${navBg}'}}
    
     className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <a href="http://
        ">
           <Image
          src="/../public/assets/mylogo.png"
          alt="/"
          width={200}
          height={100}
        />
        </a>
       
        <div>
          <ul style={{color: '${LinkColor}'}} 
          className="hidden md:flex">
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
              <a href="/#projects">Project</a>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <a href="/#contact">Contact</a>
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className={nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
          nav ? 
          'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 ' 
          : 'fixed left-[-100%] top-0 p-10 ease-in duration-500 '}>
        <div>
            <div className='flex w-full items-center justify-between'>
               <a href="http://"><Image src='/../public/assets/mylogo.png' alt='/' width={87} height={35} /></a>
                
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                    <AiOutlineClose/>
                </div>
            </div>
            <div className='border-p border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-4'>Lets build something legendery together</p>
            </div>
            </div>
            <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
  <li onClick={()=> setNav(false)} className='py-4 text-sm'><a href='/'>Home</a></li>
  <li onClick={()=> setNav(false)} className='py-4 text-sm'><a href='/#about'>About</a></li>
  <li onClick={()=> setNav(false)} className='py-4 text-sm'><a href='/#skills'>Skills</a></li>
  <li onClick={()=> setNav(false)} className='py-4 text-sm'><a href='/#projects'>Project</a></li>
  <li onClick={()=> setNav(false)} className='py-4 text-sm'><a href='/#contact'>Contact</a></li>
</ul>
<div className='pt-40'>
<p className='uppercase tracking-widest text-[#5651e5]'>
  Let's Connect
</p>
<div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
 <a href="https://www.linkedin.com/in/sagar-nawaz-12081223a/">
 <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
    <LinkedinOutlined  />
    </div>
 </a>
    <a href="https://github.com/sagarnawaz">
    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
    <GithubOutlined   />
    </div>
    </a>
    <a href="mailto:sagarnawaz44@gmail.com">
    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
    <MailOutlined />
    </div>
    </a>
    
    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
    <FilePdfOutlined />
    </div>
</div>
</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
