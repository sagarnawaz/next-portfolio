import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
            <h2>Who  I Am</h2>
            <p className='py-2 text-gray-600'> I am not normal developer </p>
            <p className='py-2 text-gray-600'>
            A dedicated developer who is always willing to take the lead 
            in challenging scenarios. I have a passion for achieving goals and the flexibility 
            to work well with a team. I've finished learning this energizing expertise, and 
            I have a firm grasp of WordPress, HTML, CSS, JavaScript, JQuery, Web development.
            A freelancer who provides service for digital programming
            and design content needs for all business with more than
            one  years of experience
            </p>
            <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duratiion-300'>
          <img className='rounded-xl ' src='https://images.pexels.com/photos/6424588/pexels-photo-6424588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
        </div>
        </div>
    </div>
  )
}

export default About