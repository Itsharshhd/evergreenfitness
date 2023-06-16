import React from 'react'
import { programsData } from '../constants'
import { RightArrow } from '../assets'
const Programs = () => {
  return (
    <div id="Programs"className='flex flex-col gap-4 px-4 py-0 mt-20'>

      {/* Programs title */}

      <div className='flex flex-col md:flex-row md:gap-16 gap-4 bold justify-center text-white uppercase italic md:text-5xl text-xl'>
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>

        <div className='flex gap-4 flex-col md:flex-row'>
        {programsData.map((program) => (
              <div className='flex flex-col bg-gray-800 p-8 gap-4 justify-between hover:bg-gradient-to-r from-green-500 to-green-700 hover:cursor-pointer'>
                <img src={program.image} alt="" className='w-8 h-8'/>
                <span className='font-bold text-base text-white'>{program.heading}</span>
                <span className='text-sm leading-6 text-white'>{program.details}</span>
                <div className='flex items-center gap-8'>
                  <span className='text-white bold'>Join Now</span>
                  <img src={RightArrow} className='w-4'/>
                </div>
              </div>
            ))}
        </div>

    </div>
  )
}

export default Programs