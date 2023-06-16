import React from 'react';
import Header from '../components/Header';
import { HeroImage } from '../assets';
import { motion } from 'framer-motion';


const Home = () => {

  const figuresText = [{number:"+5", text:"Expert Coaches"}, 
                       {number:"+200", text:"Members Joined"}, 
                       {number:"+10", text:"Fitness Programs"}]


  return (
    <div id="Home"className='flex justify-between md:flex-row flex-col'>

      {/* Left Section */}
       {/* blur */}
      <div className='absolute md:-top-40 md:-left-48 h-full md:w-4/6 w-1/2 bg-gradient-to-r from-green-200 to-green-600 rounded-full filter blur-xl z-0' />


      <div className='p-8 pt-7 md:basis-3/4 z-10'>
        <Header />

        {/* Advertise Div */}

        <div className='flex items-center justify-start relative rounded-3xl bg-stone-700 md:py-5 py-2 px-3 md:mt-12 mt-8 md:w-2/5'>
            
            <motion.div
            animate={{ x:[0, 210, 0] }}
            transition={{ duration: 5, type: 'tween', repeat: Infinity, repeatType: 'loop'}}
            className='absolute bg-green-700 w-24 h-4/5 left-2 rounded-2xl'
            />
          <span className='text-white uppercase z-0'>the best fitness club in the town</span>
        </div>

        {/* Home headings */}

        <div className='flex flex-col gap-4 uppercase md:text-7xl text-xl text-white mt-8'>
          <div><span className='stroke-text'>Get </span><span>Fit</span></div>
          <div><span>Remain </span><span className='stroke-text'>Evergreen</span></div>
          <div className='text-base font-extralight capitalize tracking-{1px} w-4/5'>
            <span>
              Shape your ideal body with best trainers at evergreen fitness
            </span>
          </div>
        </div>

        {/* Figures */}

        <div className='flex gap-8 mt-4'>
          {
            figuresText.map((item)=>(
              <div className='flex flex-col'>
                <span className='text-white md:text-4xl text-3xl'>{item.number}</span>
                <span className='text-stone-900 uppercase'>{item.text}</span>
              </div>
            ))
          }
        </div>

        {/* Home Left Buttons */}
        <div className="flex gap-8 font-normal mt-4">
          <button 
          className='bg-green-700 md:w-40 md:p-2 border-transparent border-solid border-4 text-white font-bold transition-all'
          onClick={()=> window.location.href="#Programs"}
          >Get Started</button>
          <button  
          className='md:p-2 font-bold border-4 border-solid border-green-700 transition-all text-white md:w-40'
          onClick={()=> window.location.href="#About"}
          >Learn More</button>
        </div>
      </div>

      {/* Right section */}

      <div className='md:basis-1/4 bg-gradient-to-bl from-green-700 to-green-300 h-screen'>
          <motion.button 
          className='bg-white p-2 w-40 font-bold rounded-lg md:right-20 md:top-16 top-20 relative text-black'
          onClick={()=> window.location.href="#Plans"}
          initial={{ right: "-20rem"}}
          whileInView={{ right: "-6rem"}}
          transition={{ type: 'tween'}}
          >Join Now</motion.button> 
        <motion.img src={HeroImage} alt="An Athelete's image" 
        className=' top-40 relative md:right-36 w-80'
        initial={{ right: "-20rem"}}
        whileInView={{ right: "4rem"}}
        transition={{ type: 'tween'}}
        />
      </div>
    </div>
  )
}

export default Home