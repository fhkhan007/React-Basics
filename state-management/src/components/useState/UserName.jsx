import React, { useState } from 'react'

const UserName = () => {
    const [name, setName] = useState('Hossain')
    const changeName = ()=> {
        setName('Mohammad')
    }
  return (
    <div>
        <h2>User Name: {name}</h2>
        <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default UserName