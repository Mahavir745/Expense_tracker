import React, { useContext, useRef } from 'react'
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { userDataProvider } from '../../Store/userData-store';

const Signup = () => {

  const { addUserData } = useContext(userDataProvider)
  const navigate = useNavigate()

  const emailElement = useRef();
  const contactElement = useRef();
  const passwordElement = useRef();
  const confirmElement = useRef();
  const { HandleSlideWindow, darkmode } = useOutletContext()

  const HandleSignUpData = (e) => {
    e.preventDefault()

    const email = emailElement.current.value;
    const contact = contactElement.current.value;
    const password = passwordElement.current.value;
    const confirm_password = confirmElement.current.value;
    const randomNo = Math.floor(Math.random()*(99 - 10) + 10);
    const idCreate = email.split("@")[0]
    const username = idCreate + randomNo;




    const id = Date.now()

    if (email !== "" && contact !== "" && password !== "" && confirm_password !== "") {

      if (password !== confirm_password) {
        alert("Password not matched")
        return
      } else {
        const user = { email, contact, password, confirm_password, id ,username,amount:0,expense:0}
        addUserData(user)
        HandleSlideWindow()

        emailElement.current.value = "";
        contactElement.current.value = "";
        passwordElement.current.value = "";
        confirmElement.current.value = "";
      }


    }
    else {
      alert("Input should be a value")
      return
    }



  }

  return (
    <div className='h-[auto] mb-5'>
      <form className={` mt-4 w-full sm:w-[480px] md:w-[580px] lg:w-[580px] lg:h-[580px] border  m-auto  rounded-2xl overflow-hidden ${!darkmode && " text-blue-800 bg-gray-800"}`} onSubmit={(e) => HandleSignUpData(e)}>
        <h2 className={` text-white text-[32px] text-center ${!darkmode ? "bg-blue-500" : "bg-orange-500"}`}>Register</h2>
        <div className={`${!darkmode ? "bg-sky-100" : "bg-yellow-100"} w-[300px] md:w-[400px] lg:w-[500px]  mt-3 rounded p-2 flex flex-col border m-auto `}>
          <label htmlFor="emailId" className='block'>Email: <span className='text-red-800'>*</span> </label>
          <input type="email" id='emailId' className='peer border w-[100%] p-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer required' ref={emailElement} />
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </div>
        <div className={` ${!darkmode ? "bg-sky-100" : "bg-yellow-100"} w-[300px] md:w-[400px] lg:w-[500px] mt-3 rounded p-2 flex flex-col border m-auto `}>
          <label htmlFor="Contact" className='block'>Contact: <span className='text-red-800'>*</span></label>
          <input type="number" id='Contact' className='border w-[100%] p-2 focus:outline-sky-600 required appearance-none' ref={contactElement} />
        </div>
        <div className={`w-[300px] md:w-[400px] lg:w-[500px] mt-3 rounded p-2 flex flex-col border m-auto  ${!darkmode ? "bg-sky-100" : "bg-yellow-100"}`}>
          <label htmlFor="Create-Password" className='block'>Create Password: <span className='text-red-800'>*</span></label>
          <input type="password" id='Create-Password' className='border w-[100%] p-2 focus:outline-sky-600 required' ref={passwordElement} />
        </div>
        <div className={` ${!darkmode ? "bg-sky-100" : "bg-yellow-100"} w-[300px] md:w-[400px] lg:w-[500px] mt-3 rounded p-2 flex flex-col border m-auto `}>
          <label htmlFor="Confirm-Password" className='block'>Confirm Password: <span className='text-red-800'>*</span></label>
          <input type="password" id='Confirm-Password' className='border w-[100%] p-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer required' ref={confirmElement} />
        </div>
        <div className={` ${!darkmode ? "bg-sky-100" : "bg-yellow-100"} w-[300px] md:w-[400px] lg:w-[500px] mt-3 rounded p-2 flex flex-col m-auto`}>
          <button className={`border p-2 w-[100%] text-white rounded-lg ${!darkmode ? "bg-blue-500" : "bg-orange-500"}`} type='submit'>Register</button>
          <p className=''> Already have an account:  <Link className='text-green-600 hover:text-blue-500' onClick={HandleSlideWindow}>Login Here</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Signup