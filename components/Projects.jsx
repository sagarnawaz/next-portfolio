import React from 'react'
import Image from 'next/image';
import portfolioImg from '../public/projects/portfolio.png'
import budgetImg from '../public/projects/budget.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-10'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Build</h2>
            <div className='grid md:grid-cols-2 gap-8'>

              <ProjectItem title='Portfolio' 
              backgroundImg={portfolioImg} 
              projectUrl='https://sagarnawaz.github.io/Vetevo/'
              />
               <ProjectItem title='Budget App' 
              backgroundImg={budgetImg} 
              projectUrl='https://sagarnawaz.github.io/Budget-App/'
              />

            </div>


        </div>

    </div>
  )
}

export default Projects
