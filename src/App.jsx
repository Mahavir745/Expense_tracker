import React, { useState } from 'react'
import Header from './component/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer/Footer'
import "./App.css"
import DataStoreProvider from './Store/userData-store'

const App = () => {

  const [darkmode,setDarkmode] =  useState(true)
  const [slidewindow, setSlidewindow] = useState(true)

  function HandleDarkmode(){
    if(darkmode){
      setDarkmode(false)
    }
    else{
      setDarkmode(true)
    }
  }

  function HandleSlideWindow(){
    if(slidewindow){
      setSlidewindow(false)
    }
    else{
      setSlidewindow(true)
    }
  }

  return (
    <DataStoreProvider>
    <Header onButtonClick={HandleDarkmode} darkmode = {darkmode}/>
    <Outlet context={{darkmode,HandleSlideWindow,slidewindow}}/>
    <Footer/>
    </DataStoreProvider>
  )
}

export default App