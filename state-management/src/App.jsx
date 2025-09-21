import React from 'react'
import UserName from './components/useState/UserName'
import Counter from './components/useState/Counter'
import CounterReducer from './components/useReducer/components/Counter'
const App = () => {
  return (
    <>
    <UserName/>
    <Counter/>
    <CounterReducer/>
    
    </>
  )
}

export default App