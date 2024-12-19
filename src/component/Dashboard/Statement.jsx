import React from 'react'

const Statement = ({statement}) => {
  return (
    <div className='flex justify-evenly w-[400px] sm:w-[500px] md:w-auto'>
    <p className=' w-[300px] sm:w-[420px] border-b-2 border-red-200 p-2 text-red-500' style={{textTransform:"capitalize"}}>{statement.expense}</p>
    <p className=' w-[100px] sm:w-[180px] border bg-red-100 font-medium text-center p-2 text-red-500'>{statement.amount}</p>
  </div>
  )
}

export default Statement