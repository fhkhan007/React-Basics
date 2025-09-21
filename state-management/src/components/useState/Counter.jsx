import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increaseCounter = ()=> {
        setCounter(count => count + 1 )
    }
    const decreaseCounter = ()=> {
        setCounter(count => count-1)
    }
    const refreshCounter = ()=> {
        setCounter(0)
    }
  return (
    <div>
        <h1>Count: {counter}</h1>
        <button onClick={increaseCounter}>Increase</button>
        <button onClick={decreaseCounter}>Decrease</button>
        <button onClick={refreshCounter}>Referesh</button>
    </div>
  )
}

export default Counter