import React, { useCallback,useMemo, useState } from 'react'

const Count = () => {

    const [count,setCount] = useState(0);

    // useCallback - remember function
    const increment = useCallback( ()=> {
        setCount( c => c+1);
    }, [])

    // useMemo
    const double = useMemo ( ()=> {
        return count*2;
    }, [count])
  return (
    <div>
        <p>Count: {count}</p>
        <p>Double: {double}</p>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Count