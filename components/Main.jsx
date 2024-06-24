import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { GithubOutlined } from '@ant-design/icons';
import { LinkedinOutlined } from '@ant-design/icons';
import { MailOutlined } from '@ant-design/icons';
import { FilePdfOutlined } from '@ant-design/icons';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Main = () => {
    const [text] = useTypewriter({
        words: ['Front-End Developer', 'Software Engineer'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
        
      })

  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-white-600'>
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <div className='App'>
          <h1 className='py-4 text-[#e9ecf0]'>
            Hi, I'm <span className='text-[#5651e5]'>Sagar</span>
          </h1>
          <h1 className='py-2 text-[#e9ecf0]'>A {text}</h1>
      
      <Cursor cursorColor='red' />
    </div>
  
          
          <p className='py-4 text-[#e9ecf0] max-w-[70%] m-auto'>
            I'm a front-end web developer specializing in building and
            occasionally designing exceptional digital experiences. Currently,
            I'm focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a href="https://www.linkedin.com/in/sagar-nawaz-12081223a/" target="_blank" rel="noopener noreferrer">
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <LinkedinOutlined />
              </div>
            </a>
            <a href="https://github.com/sagarnawaz" target="_blank" rel="noopener noreferrer">
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <GithubOutlined />
              </div>
            </a>
            <a href="mailto:sagarnawaz44@gmail.com">
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <MailOutlined />
              </div>
            </a>
            <a href="https://drive.google.com/file/d/18Bddz2C1hW-hzY25lCtB9AVgjsax6EX-/view"><div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FilePdfOutlined />
            </div>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

// import React from 'react'
// import {BsFillPersonLinesFill} from 'react-icons/bs';
// import { GithubOutlined  } from '@ant-design/icons';
// import { LinkedinOutlined   } from '@ant-design/icons';
// import { MailOutlined  } from '@ant-design/icons';
// import { FilePdfOutlined   } from '@ant-design/icons';

// const Main = () => {
//   return (
//     <div id='home' className='w-full h-screen text-center'>
//         <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
//             <div>
//                 <p className='uppercase text-sm tracking-widest text-gray-600'>
//                     LET'S BUILD SOMETHING TOGETHER
//                 </p>
//                 <h1 className='py-4 text-gray-700'>
//                     Hi, I'm <span className='text-[#5651e5]'> Sagar</span>
//                 </h1>
//                 <h1 className='py-2 text-gray-700'> A Front-End Developer</h1>
//                 <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
//                    I'm a front-end web developer specializing in building land
//                    occasionally designing exceptional digital experinces, Currently,
//                    I'm focused on building responsive front-end web applications while 
//                    learning back-end technologies
//                 </p>
//                 <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
//                 <a href="https://www.linkedin.com/in/sagar-nawaz-12081223a/">
//  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
//     <LinkedinOutlined  />
//     </div>
//  </a>
//     <a href="https://github.com/sagarnawaz">
//     <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
//     <GithubOutlined   />
//     </div>
//     </a>
//     <a href="mailto:sagarnawaz44@gmail.com">
//     <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
//     <MailOutlined />
//     </div>
//     </a>
//                     <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
//                     <FilePdfOutlined />
//                     </div>

//                 </div>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Main;