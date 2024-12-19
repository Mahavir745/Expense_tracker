import React from 'react'
import { useNavigate } from 'react-router-dom'

const DashboardHeader = ({userFound}) => {

  const navigate = useNavigate()
  const HandleLogOut = ()=>{
    navigate('/')
  }
  return (
    <div className='flex flex-wrap h-[100px] justify-evenly items-center bg-violet-100 text-white'>
    <p className='text-sky-800 font-semibold'>Costumer Id: <span className='text-pink-700 text-2xl textShadowEffect'>{userFound.username}</span></p>
    <p className='text-sky-800 font-semibold'>Contact No: <span className='text-pink-700 text-2xl textShadowEffect'>{userFound.contact}</span></p>
    <button onClick={HandleLogOut} className='text-pink-700 font-semibold focus:text-sky-500'>Log Out</button>
  </div>
  )
}

export default DashboardHeader