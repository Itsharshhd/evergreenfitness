import React, { useState } from 'react'
import { Logo, Bars } from '../assets';
import { Link } from 'react-router-dom';

const Header = () => {

  const list_items = ["Home", "Programs", "About", "Plans", "Testimonials", "Gallery"];

  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className='flex justify-between right-8'>

      {/* Header logo */}
      <img src={Logo} alt="Evergreen logo" className='md:w-16 md:h-16 w-12 h-12'/>

      {/* Header Links */}
      <div>
      { menuOpened === false && mobile===true 
        ? <div 
          className='bg-stone-900 p-2 rounded-sm fixed end-4'
          onClick={()=> setMenuOpened(true)}
          >
          <img src={Bars} alt="menu-image" className='w-6 h-6'/></div>
        : <ul className='list-none flex gap-8 flex-col md:flex-row right-2 md:right-96 text-white bold z-40 fixed md:absolute bg-gradient-to-br from-stone-300 to-stone-800 p-2 md:bg-none'>

          {
            list_items.map((item)=>(
            <li
            onClick={()=> setMenuOpened(false)}
            className='cursor-pointer hover:text-green-700'
            >
              {
                item==="Gallery"
                ? <Link
                  to={`/${item.toLowerCase()}`}
                  >{item}</Link>
                : <a
                  href={`#${item}`}
                  >{item}</a>
              }
            </li>
            ))
          }
          <li 
          className='md:hidden cursor-pointer text-center'
          onClick={()=>setMenuOpened(false)}
          >Close x</li>
          </ul>
      }
      </div>


    </div>
  )
}

export default Header