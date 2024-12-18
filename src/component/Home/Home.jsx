import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Display from './Display'

const Home = () => {
  const {darkmode} = useOutletContext()

  return (
    <div className={`${darkmode ? "bg-white": "bg-gray-700 text-white"}`}>
      <div className='flex w-[375px] sm:w-[820px] md:w-[1024px] lg:w-[1160px] m-auto relative'>
      <Display/>
      <Login/>
      <Signup/>
      </div> 
    </div>
  )
}

export default Home