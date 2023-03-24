import React, { useState } from "react";
const UseArry = () => {
  const userdata = [
    { id: 1, name: "rahul", age: 23 },
    { id: 2, name: "golu", age: 23 },
    { id: 3, name: "amit", age: 24 }
  ];
  const [arr, setarr] = useState(userdata);
  console.log(arr);
 

  const clearit= ()=>{
    setarr([]);
    
  }
  const removel= (id)=>{
    const newarr= arr.filter((el)=>{
      return el.id!==id;
    })
    setarr(newarr)
  }
  return (
    <>

      {arr.map((el) => {

         return (
              <h1 key={el.id}>
             {el.name} & Age{el.age}
             <button onClick={ ()=>removel(el.id)}>Remove</button>
              </h1>

         )
      })}




{
  arr.length>0 &&
     <button onClick={clearit}>
       Clear All 
    </button>
  
}
    </>
  );
};
export default UseArry;
