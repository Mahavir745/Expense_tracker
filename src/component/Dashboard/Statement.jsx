import React from 'react'

const Statement = ({statement}) => {
  return (
    <div className='flex justify-evenly '>
    <p className='w-[420px] border-b-2 border-red-200 p-2 text-red-500' style={{textTransform:"capitalize"}}>{statement.expense}</p>
    <p className='w-[180px] border bg-red-100 font-medium text-center p-2 text-red-500'>{statement.amount}</p>
  </div>
  )
}

export default Statement