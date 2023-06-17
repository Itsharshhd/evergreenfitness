import React from 'react';
import { galleryImages } from '../constants';
import { LeftArrow } from '../assets';
import { Link } from 'react-router-dom';
const Gallery = () =>{
    return(
        <div className='bg-gradient-to-br from-stone-300 to-stone-800'>
            <div className='flex flex-col gap-2'>

                <div className='flex md:gap-4 m-8 justify-between md:justify-center'>
        
                    <Link to="/"
                    className='md:absolute md:left-12 bg-green-500 rounded-full p-2 hover:bg-stone-900'
                    ><img src={LeftArrow} alt="" className='w-6 h-6 '/> </Link>
                   
                    <div className='bold md:text-5xl text-2xl flex md:justify-center gap-4'>
                        <span className='text-white'>Evergreen</span>
                        <span className='stroke-text'>Gallery</span>
                    </div>
                    
                </div>
                <span className='flex md:justify-center justify-end m-8'>
                    <hr className='border-2 border-green-500 -mt-16 w-1/2'/>
                </span>

                <div className='grid gap-6 md:grid-cols-3 grid-cols-1 mx-20 md:my-8'>
                    {
                        galleryImages.map((image)=>(
                            <img src={image} alt="" 
                            className='w-full h-72 hover:scale-125 rounded-lg border-white border-4 hover:border-green-400'
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery;