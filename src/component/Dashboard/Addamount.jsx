import React, { useRef } from 'react'

const Addamount = ({HandleAddAmount}) => {

  const amountElement = useRef()

  function HandleSubmit(e){
    e.preventDefault();
    let amount = amountElement.current.value;
    amountElement.current.value = ""
    HandleAddAmount(Number(amount))
  }
  return (
    <form className='m-auto w-[400px] mt-4 flex justify-center gap-4' onSubmit={(e)=> HandleSubmit(e)}>
    <input type="number" className='border p-2 w-40' placeholder='Amount:' ref={amountElement}/>
    <button className='bg-green-500 p-2 text-white' type='submit'>Add Amount</button>
    </form>
  )
}

export default Addamount