import React, { useContext, useEffect, useState } from 'react'
import { userDataProvider } from '../../Store/userData-store'
import Dashboard from './Dashboard'

const DataHandler = () => {
  const { registerList, loginList } = useContext(userDataProvider)
  const [userFound, setuserFound] = useState()

  useEffect(() => {
    let data = registerList.find((user) => {
      return (user.email === loginList[0].user) && (user.password === loginList[0].password)
    })

    setuserFound(data)
  },[registerList,loginList])

  return (
    <>
      {userFound ? <Dashboard userFound={userFound}/> : <h2 className='text-4xl text-center'>User Data is not found</h2>}
    </>
  )
}

export default DataHandler