import { LogIn } from 'lucide-react'
import React, { useContext, useRef } from 'react'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import { userDataProvider } from '../../Store/userData-store'

const Login = () => {

  const { HandleSlideWindow, darkmode } = useOutletContext()
  const userElement = useRef()
  const userPassword = useRef()
  const navigate = useNavigate()
  const { addLoginData } = useContext(userDataProvider)

  const HandleLogin = (e) => {
    e.preventDefault();

    const user = userElement.current.value;
    const password = userPassword.current.value;

    userElement.current.value = ""
    userPassword.current.value = ""

    if (!user || !password) {
      alert("Please fill in both fields.")
      return
    }

    const data = { user,password}
    addLoginData(data)
    navigate("/datahandler")

  }

  return (
    <div className='h-[auto] mb-5 '>
      <form className={`border mt-4 w-[400px] h-[400px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] lg:w-[580px] lg:h-[580px] m-auto rounded-2xl overflow-hidden ${!darkmode ? "bg-sky-950 text-white" : "text-gray-800"}`} onSubmit={(e) => HandleLogin(e)}>
        <h2 className={`text-white text-[32px] text-center ${!darkmode ? "bg-blue-800" : "bg-orange-500"}`}>Login</h2>
        <div className='w-[300px] md:w-[500px] border-sky-100 mt-3 rounded p-2 flex flex-col border m-auto'>
          <label htmlFor="userId" className='block'>Email: </label>
          <input type="email" id='userId' className='border w-[100%] p-2 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer required' ref={userElement} />
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </div>
        <div className='w-[300px] md:w-[500px] border-sky-100 mt-3 rounded p-2 flex flex-col border m-auto'>
          <label htmlFor="userId" className='block'>Password:</label>
          <input type="password" id='userId' className='border w-[100%] p-2 focus:outline-sky-500' ref={userPassword} />
        </div>
        <div className='w-[300px] md:w-[500px] border-sky-100 mt-3 rounded p-2 flex flex-col m-auto'>
          <button type='submit' className={`border p-2 w-[100%] ${!darkmode ? "bg-blue-800" : "bg-orange-500"} flex  justify-center text-white rounded-lg`}>Login <LogIn /></button>
          <p className=''> If you don't have accout:  <Link className='text-blue-600 hover:text-red-500' onClick={HandleSlideWindow}>Register Here</Link></p>

          <ul className=' h-[200px]  flex flex-col justify-center'>
            <li className='text-[18px] text-blue-700 font-semibold mb-4'>Secure Access, Peace of Mind:</li>
            <li className='text-[12px]'>Your security is our priority - login with confidence</li>
            <li className='text-[12px]'>We use Advanced encryption to keep your data safe</li>
            <li className='text-[12px]'>Your Privacy matters - your information stays yours.</li>
            <li className='text-[12px]'>Trusted by thousands, designed for your peace of mind</li>
          </ul>
        </div>

      </form>
    </div>
  )
}

export default Login