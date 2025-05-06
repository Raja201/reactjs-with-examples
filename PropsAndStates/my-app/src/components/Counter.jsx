import React, { useState } from 'react'
import "./Counter.css"
import PropsExample from './PropsExample';
export const Counter = () => {
  const [count,setCount] = useState(0);

  function doIncrement(){
    setCount(count+1)
  }

  function doDecrement(){
    setCount(count-1)
  }

  const userData = {
    name : "React",
    description : "We are performing Incremenet and Decrement"
  }

  return (
    <div>
        <PropsExample data = {userData}></PropsExample>
        <div className='Area'>{count}</div>
        <button className='increment' onClick={doIncrement}>+</button>
        <button className='decrement' onClick={doDecrement}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>

    </div>
  )
}
