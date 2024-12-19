import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Display = () => {
  const{slidewindow,darkmode} = useOutletContext()

  let info ;
  if(slidewindow){
    info = 'Your security is our priority - Register Here '
  }
  else{
    info = "Welcome! Please log in to continue your journey with us"
  }

  return (
    <div className={`w-[580px] h-[580px] hidden sm:flex d sm:w-[580px] lg:w-[580px] lg:h-[580px] mt-4 rounded-2xl border absolute ${slidewindow? "sm:left-[110px] sm:top-[0px] md:left-[222px] lg:left-[220px] xl:left-[0px] xl:top-[0px]": "sm:left-[110px] sm:top-[600px] lg:left-[220px] lg:top-[600px] md:left-[222px] md:top-[600px] xl:left-[580px] xl:top-[0px]" } flex items-center justify-center sildwindowEffect ${darkmode && "sildwindowEffect2"}`}>
      <h1 className='text-[50px] text-white w-[500px] p-6'>{info}</h1>
    </div>
  )
}

export default Display