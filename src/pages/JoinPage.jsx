import React from 'react'
import { Link } from 'react-router-dom'
import { LeftArrow } from '../assets'


const JoinPage = () => {
  return (
    <div className='bg-gray-700 p-8'>
      <span>
        <Link to="/"><img src={LeftArrow} alt="" className='w-6 h-6 '/></Link>
      </span>
      <div className='flex flex-col justify-center items-center h-screen  text-white bold text-4xl m-0'>
        <div clasName='text-center m-4 p-4'>Welcome to City Health Heart Club</div>
        <div className='text-center my-8'>Congratulations on starting your evergreen journey</div>
      </div>
    </div>
      )
}

export default JoinPage