import { Moon, Sun } from 'lucide-react'
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const Header = ({onButtonClick,darkmode}) => {
  return (
    <div className='bg-gray-900 w-full h-[180px] flex items-center p-2 justify-around'>
      <div className='sm:w-[400px] md:w-[600px] rounded p-2'>
        <h1 className='lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-orange-500'>Expenses Tracker</h1>
        <p className='text-white font-extrabold text-left text-[10px] sm:text-1xl md:text-[16px] mt-2'>Managed by Mveer745</p>
      </div>
      <button className='text-white' onClick={onButtonClick}>{darkmode? <FaMoon className='text-3xl'/>:<FaSun className='text-3xl'/>}</button>
    </div>
  )
}

export default Header