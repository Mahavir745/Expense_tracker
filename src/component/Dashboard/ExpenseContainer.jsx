import React from 'react'
import Statement from './Statement'

const ExpenseContainer = ({addExpenses}) => {

  return (
    <div className='w-[440px] h-[500px] md:w-[720px] border m-auto mb-4 p-4 overflow-y-scroll'>
    <label htmlFor="lable" className='text-gray-500 m-4'>Account Statement: </label>
    {addExpenses.map((statement,index) => <Statement key={index} statement={statement}/>)}
  </div>
  )
}

export default ExpenseContainer