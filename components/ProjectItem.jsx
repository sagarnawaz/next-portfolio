import React from 'react'
import Image from 'next/image';

const Projectitem = ({title, backgroundImg, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 roundded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
    <Image className='rounded-xl group-hover:opacity-18' src={backgroundImg} alt='/' />
    <div className='hidden group-hover:block absolute top-[58%] left-[50%] translater-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl border-4 border-indigo-950 text-[#2e31d6] tracking-widest text-center '>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'></p>
        <a href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-white text-[#3b393d] font-bold text-lg cursor-pointer'>More Info</p>
        </a>
    </div>
</div>
  )
}

export default Projectitem