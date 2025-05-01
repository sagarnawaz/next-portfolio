import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-xl shadow-gray-800">
      <Image
        className="w-full h-full object-cover transition duration-300 group-hover:opacity-60"
        src={backgroundImg}
        alt={title}
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
        <h3 className="text-white text-2xl font-bold mb-4 text-center">{title}</h3>
        <Link href={projectUrl} target="_blank">
          <p className="px-6 py-2 bg-white text-gray-800 rounded-lg font-semibold hover:scale-105 transition">
            View Live
          </p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem
