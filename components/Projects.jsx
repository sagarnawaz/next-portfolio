import React from 'react'
import Image from 'next/image';
import analysisImg from '../public/projects/analysis.png'
import budgetImg from '../public/projects/budget.png'
import ProjectItem from './ProjectItem'
import todoImg from '../public/projects/todo.png'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-10'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Build</h2>
            <div className='grid md:grid-cols-2 gap-8'>

              <ProjectItem title='Sentiment Analysis' 
              backgroundImg={analysisImg} 
              projectUrl='https://sentiment-analysis-kappa.vercel.app/'
              />
               <ProjectItem title='Budget App' 
              backgroundImg={budgetImg} 
              projectUrl='https://sagarnawaz.github.io/Budget-App/'
              />
              <ProjectItem title='Todo-List' 
              backgroundImg={todoImg} 
              projectUrl='https://to-do-list-nine-wine.vercel.app/'
              />

            </div>


        </div>

    </div>
  )
}

export default Projects
