
import React, {useEffect, useState} from "react";

export default function App() {
const [count, setCount]= useState(0);
 const handleadd= ()=>{
   setCount(count+1);
 }
 const handlesub= ()=>{
  setCount(count>0?count-1:0);
 }
 useEffect(()=>{
   console.log(count);
 }, [count])
  return (
    <div className="App">
      <h1>count{count}</h1>
      <button onClick={handleadd}>+1</button>
      <button onClick={handlesub}>-1</button>
    </div>
  );
}
