import React from 'react'
import { Adidas, Image1, Image2, Image3, Image4,Nb,Nike,Tick } from '../assets'
import { Link } from 'react-router-dom'



const details_texts = ["Our 5 Expert Coachs", "Train Smarter and faster than before", "Free programs for new members", "Reliable partners"]

const About = () => {
  return (
    <div id="About" className='md:px-8 px-4 py-0 flex md:gap-8 gap-2 md:flex-row flex-col'>

      {/* Left Section */}

      <div className='flex-1 grid grid-cols-3 gap-4 auto-rows-fr md:m-0 -mb-0 mt-16' >
        <img src={Image1} alt="athlete-image" className='object-cover row-start-1 row-span-3' />
        <img src={Image2} alt="athlete-image" className='object-cover col-start-2 col-span-2 row-start-1 mt-4' />
        <img src={Image3} alt="athlete-image" className='object-cover md:h-64 h-32 col-start-2 col-span-1 row-start-2' />
        <img src={Image4} alt="athlete-image" className='object-cover  md:h-64 h-32 col-start-3 col-span-1 row-start-2' />
      </div>

      {/* Right Section */}

      <div className='flex-1 uppercase gap-4 flex flex-col md:mt-4 -mt-12'>
        <span className='font-bold text-green-700'>Some Reasons</span>
        <div className='text-white text-5xl font-bold'>
          <span className='stroke-text'>why </span>
          <span>choose us?</span>
        </div>


        <div className='flex flex-col gap-4 text-white font-bold'>
          {
            details_texts.map((text)=>(
              <div className='flex md:text-xl gap-1'>
                <img src={Tick} alt="" lassName='md:w-8 w-4 md:h-8 w-4'/>
                <span>{text}</span>
              </div>
            ))
          }
        </div>

        <span className='text-stone-900 font-bold'>Our Partners</span>
        <div className='flex gap-4'>
          <img src={Nb} alt="" className='md:w-20 w-10'/>
          <img src={Adidas} alt="" className='md:w-20 w-10'/>
          <img src={Nike} alt="" className='md:w-20 w-10'/>
        </div>

        <Link to="/gallery">
          <span className='md:text-3xl text-xl underline hover:text-green-500 bold text-white stroke-text'>See more photos</span>
        </Link>

      </div>


    </div>
  )
}

export default About
