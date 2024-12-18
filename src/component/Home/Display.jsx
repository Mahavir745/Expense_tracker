import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Display = () => {
  const{slidewindow,darkmode} = useOutletContext()

  let info ;
  if(slidewindow){
    info = 'Welcome! Please log in to continue your journey with us'
  }
  else{
    info = "Your security is our priority - Register Here"
  }

  return (
    <div className={`w-[400px] h-[400px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] lg:w-[580px] lg:h-[580px] mt-4 rounded-2xl border absolute ${slidewindow? "left-[580px]": "left-[0px]" } flex items-center justify-center sildwindowEffect ${darkmode && "sildwindowEffect2"}`}>
      <h1 className='text-[50px] text-white w-[500px] p-6'>{info}</h1>
    </div>
  )
}

export default Display