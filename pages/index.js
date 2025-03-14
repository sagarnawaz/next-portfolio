import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  
      <div >
        <Head>
          <title>Sagar | Front-End Developer</title>
        <meta name="description" content="Created BY Sagar"/>  
        <link rel="icon" href='/favicon.ico' />
        </Head>
        <Navbar/>      
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      
  )
}
