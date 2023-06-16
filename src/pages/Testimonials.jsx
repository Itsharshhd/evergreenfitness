import { React, useState } from 'react';
import { tData } from '../constants';
import { LeftArrow, RightArrow } from '../assets';
import { motion } from 'framer-motion';

const Testimonials = () => {
  
  const [testimonial, setTestimonial] = useState(0);

  const tLength = tData.length;

  const handleLeftClick = () => {
    testimonial==0
    ? setTestimonial(tLength-1)
    : setTestimonial(prev => prev-1)
  }

  const handleRightClick = () => {
    testimonial==tLength-1
    ? setTestimonial(0)
    : setTestimonial(prev => prev+1)
  }
  
  return (
    <div id="Testimonials" className='flex md:flex-row flex-col gap-4 px-8 py-8'>
      <div className='flex md:flex-1 md:gap-8 gap-4 flex-col uppercase text-white'>
        <span className='text-green-500 font-bold'>Testimonials</span>
        <span className='stroke-text font-bold md:text-5xl text-3xl '>What They</span>
        <span className='font-bold md:text-5xl text-3xl'>Say About Us</span>
        <motion.span 
        key={testimonial}
        initial={{opacity:0, x:-100}}
        animate={{opacity: 1, x:0 }}
        exit={{opacity: 0, x:100 }}
        transition={{type: 'spring', duration: 3}}
        className='text-none text-justify tracker-wide leading-10'
        >
          {tData[testimonial].review}
        </motion.span>
        <span>
          <span className='text-green-500 '>
            {tData[testimonial].name}
          </span>
          <span>
            {" "}-{tData[testimonial].status}
          </span>
        </span>
      </div>

      {/* right section */}

      <div className='md:flex-1 relative'>
        <motion.div
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{ type:'spring', duration: 4}} 
        className='bg-inherit border-green-500 border-solid border-4 absolute md:w-72 w-36 md:h-80 h-40 right-36 md:top-3' />
        
        <motion.div
        initial={{opacity: 0, x: 100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{ type:'spring', duration: 4}} 
        className='absolute md:w-72 w-36 h-40 md:h-80 md:top-12 bg-gradient-to-r from-green-500 to-green-800 right-28' />
        
        <motion.img
        key={testimonial}
        initial={{opacity:0, x:100}}
        animate={{opacity: 1, x:0 }}
        exit={{opacity: 0, x:-100 }}
        transition={{type: 'spring', duration: 3}}
        src={tData[testimonial].image} 
        alt="People's Image" 
        className='md:h-80 h-40 md:w-72 w-36 absolute object-cover right-32 md:top-8'
        />

        <div className='flex gap-4 absolute md:right-full right-8 md:top-80 top-24'>
          <img src={LeftArrow} alt="" className='w-6 md:w-12 h-6 hover:cursor-pointer' onClick={handleLeftClick}/>
          <img src={RightArrow} alt="" className='w-6 md:w-12 h-6 hover:cursor-pointer' onClick={handleRightClick}/>
        </div>
      </div>
    </div>
  )
}

export default Testimonials