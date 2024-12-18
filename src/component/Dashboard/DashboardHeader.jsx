import React from 'react'
import { useNavigate } from 'react-router-dom'

const DashboardHeader = ({userFound}) => {

  const navigate = useNavigate()
  const HandleLogOut = ()=>{
    navigate('/')
  }
  return (
    <div className='flex justify-evenly bg-yellow-400 text-white'>
    <p className='text-red-800 font-semibold'>Costumer Id: <span className='text-gray-200 text-2xl textShadowEffect'>{userFound.username}</span></p>
    <p className='text-red-800 font-semibold'>Contact No: <span className='text-gray-200 text-2xl textShadowEffect'>{userFound.contact}</span></p>
    <button onClick={HandleLogOut} className='text-blue-950 font-semibold focus:text-red-500'>Log Out</button>
  </div>
  )
}

export default DashboardHeader