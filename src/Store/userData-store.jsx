import { createContext, useReducer } from "react";

export const userDataProvider = createContext({
  loginList: [],
  registerList: [],
  addUserData: () => { },
  addLoginData: () =>{ },
  addAmountData: () => { }
})

const HandleRegisterProvider = (currentUser, action) => {

  let newUserData = currentUser;
  if (action.type === "NEW_USER") {
    newUserData = [action.payload,...currentUser];
  }
  else if(action.type === 'ADD_AMOUNT'){
    newUserData = currentUser.map((account)=>{
      if(account.id === action.payload.id){
        return {...account, amount: action.payload.amount }
      }
    })
  }

  return newUserData;
}

const HandleloginList = (currentUser, action) => {

  let newLoginData = currentUser;
  if(action.type === "LOGIN_DATA"){
    newLoginData = [action.payload]
  }

  return newLoginData
}


const DataStoreProvider = ({ children }) => {

  const [registerList, dispatchedRegister] = useReducer(HandleRegisterProvider, [])
  const [loginList, dispatchedloginList] = useReducer(HandleloginList, [])

  const addUserData = (user) => {
    dispatchedRegister({
      type: 'NEW_USER',
      payload: user
    })
  }

  const addAmountData = (amount,id) =>{
    dispatchedRegister({
      type: 'ADD_AMOUNT',
      payload: {amount,id}
    })
  }

  const addLoginData = (user)=>{
    dispatchedloginList({
      type: "LOGIN_DATA", 
      payload: user
    })
  }


  return (
    <userDataProvider.Provider value={{
      loginList,
      registerList,
      addUserData,
      addLoginData,
      addAmountData,
    }}>
      {children}
    </userDataProvider.Provider>
  )
}

const DefaultData = [
  {
    id: "1234",
    name: "sonna@gmail.com"
  }
]

export default DataStoreProvider;