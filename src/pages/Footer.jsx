import React from 'react'
import { Github, LinkedIn, Logo, MyLogo } from '../assets';


const Footer = () => {
  return (
    <div id="Footer" className='relative md:m-0 mt-40'>
        <hr className='border-2 border-solid border-gray-300'/>
        <div className='py-4 px-8 flex flex-col gap-16 justify-center items-center z-10'>
            <div className='flex gap-16'>
                <img src={Github} alt="" 
                onClick = { () => window.open('https://github.com/Itsharshhd?tab=repositories', "_blank")}
                className='cursor-pointer w-8 h-8'
                />
                <img src={LinkedIn} alt="" 
                onClick = { () =>  window.open('https://www.linkedin.com/feed/', "_blank") } 
                className='cursor-pointer w-8 h-8' 
                />
                <img src={MyLogo} alt=""
                onClick = { () => window.open('https://itsharshdubey.netlify.app', "_blank")} 
                className='cursor-pointer w-8 h-8' />
            </div>
        </div>
        <div className='flex gap-16 items-center justify-center my-4 z-10' >
            <img src={Logo} className='md:w-20 w-16 md:h-20 h-16' />
            <span className='text-white bold'>Made By Harsh Dubey</span>
        </div>
        <div className='top-0 -right-24 absolute h-48 w-1/3 bg-gradient-to-br from-green-600 to-green-800 rounded-full filter blur-2xl z-0'></div>
        <div className='top-0 -left-24 absolute h-48 w-1/3 bg-gradient-to-br from-green-600 to-green-800 rounded-full filter blur-2xl z-0'></div>

    </div>
  )
}

export default Footer