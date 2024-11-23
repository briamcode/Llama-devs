import React from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Link to={"/"}>
            <Logo w={90} h={50}/>
          </Link>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input type='text' placeholder='search product here. . .' className='w-full outline-none pl-2'/>
          <div className='text-lg min-w-[50px] h-8 bg-yellow-400 flex items-center justify-center rounded-r-full text-black'>
            <GrSearch/>
          </div>
        </div>

        <div className='flex items-center cursor-pointer gap-7'>

          <div className='text-3xl'>
            <FaRegUserCircle/>
          </div>

          <div>
            <Link to={"/login"}className='px-3 py-1 rounded-full bg-yellow-400 hover:bg-yellow-500'>Login</Link>
          </div>

        </div>

      </div>
    </header>
  )
}

export default Header