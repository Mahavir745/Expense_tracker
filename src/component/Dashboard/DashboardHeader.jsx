import React from 'react'
import { useNavigate } from 'react-router-dom'

const DashboardHeader = ({userFound}) => {

  const navigate = useNavigate()
  const HandleLogOut = ()=>{
    navigate('/')
  }
  return (
    <div className='flex h-[100px] justify-between gap-6 flex-wrap-reverse pl-4 pr-4 items-center bg-violet-100 text-white'>
    <p className='text-sky-800 font-semibold'>Costumer Id: <span className='text-pink-700 text-2xl textShadowEffect'>{userFound.username}</span></p>
    <p className='text-sky-800 font-semibold'>Contact No: <span className='text-pink-700 text-2xl textShadowEffect'>{userFound.contact}</span></p>
    <button onClick={HandleLogOut} className='text-white font-semibold focus:text-sky-500 bg-green-600 pl-4 pr-4 pt-2 pb-2 text-[14px] rounded-[8px]'>Log Out</button>
  </div>
  )
}

export default DashboardHeader