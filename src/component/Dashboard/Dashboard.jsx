import React, { useContext, useEffect, useState } from 'react'
import ExpenseContainer from './ExpenseContainer'
import AccountStatement from './AccountStatement'
import Addamount from './Addamount'
import DashboardHeader from './DashboardHeader'
import { userDataProvider } from '../../Store/userData-store'

const Dashboard = ({userFound}) => {
  const {addUserData} = useContext(userDataProvider)

  console.log(userFound)
  let initialAmount = 0;
  if(userFound["amount"] !== undefined){
    initialAmount = userFound["amount"]
  }

  const [addAmount,setAddamount] = useState(initialAmount)
  const [addExpenses, setaddExpenses] = useState([])
  
  const HandleAddAmount = (amount)=>{
    let newAmount = (addAmount + amount)
    setAddamount(newAmount)
  }

  const HandleExpenseData = (data)=>{ 

    let newData = [...addExpenses,data]
    setaddExpenses(newData)
  }

  useEffect(()=>{
    let sum = 0
    addExpenses.forEach((amount)=> {
      sum+=Number(amount["amount"])
      let Totalamount = addAmount - Number(amount["amount"])
      setAddamount(Totalamount)

      addUserData({...userFound,amount:Totalamount,expense:sum})

    })
  },[addExpenses])

  return (
    <div>
      <DashboardHeader userFound= {userFound}/>
      <Addamount HandleAddAmount={HandleAddAmount}/>
      <AccountStatement addAmount={{addAmount,userFound,HandleExpenseData} }userFound={userFound}/>
      <ExpenseContainer addExpenses={addExpenses}/>
    </div>
  )
}

export default Dashboard