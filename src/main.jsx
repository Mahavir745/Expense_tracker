import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './component/Home/Home.jsx'
import Dashboard from './component/Dashboard/Dashboard.jsx'
import DataHandler from './component/Dashboard/DataHandler.jsx'

const route = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/datahandler' element={<DataHandler/>}/>
  </Route>
)
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>
)
