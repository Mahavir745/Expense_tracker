import React, { useContext, useEffect, useRef } from 'react'
import { userDataProvider } from '../../Store/userData-store'

const AccountStatement = ({addAmount,userFound}) => {

  const amount = addAmount.addAmount
  const HandleExpenseData = addAmount.HandleExpenseData;


  const expenseElement = useRef();
  const amountElement = useRef();

  const HandleExpenseDataField = (e)=>{

    e.preventDefault();
    const expense = expenseElement.current.value;
    const amount = amountElement.current.value;

    expenseElement.current.value = ""
    amountElement.current.value = ""

    if(expense && amount !== ""){
      let statement = {expense,amount}
      HandleExpenseData(statement)
    }
    else{
      alert("Both field has been required")
    }

  }

  let lastExpenses = 0.0
  if(userFound["expense"] !== undefined){
    lastExpenses = userFound["expense"]
  }


  return (
    <div>
      <div className='flex border flex-wrap gap-6 justify-evenly m-auto w-[400px] h-[200px] sm:w-[500px] md:w-[720px] items-center mt-4'>
        <pre className='text-2xl '>Avl. Amount:  <span className='text-green-600 text-3xl'>₹ {amount}</span></pre>
        <pre className='text-[14px] flex justify-between h-[32px] items-center  w-auto'>Last Expenses:  <span className='text-red-600 text-xl'> ₹ {lastExpenses}</span></pre>
      </div>
      <form className=' flex flex-wrap justify-between gap-4 w-[400px] sm:w-[500px] md:w-[700px] border-red-700 m-auto mt-4 mb-4' onSubmit={(e)=> HandleExpenseDataField(e)}>
        <input type="text" className=' p-2 border flex-grow' ref={expenseElement} placeholder='Expense:' />
        <input type="number" className='border p-2 w-40' ref={amountElement} placeholder='Amount:' />
        <button className='bg-red-500 p-2 text-white' type='submit'>Expense</button>
      </form>
    </div>
  )
}

export default AccountStatement