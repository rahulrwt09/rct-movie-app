import React, {useState, useEffect} from "react";
function Timer(){
  const [count, Setcount]= useState(15);
useEffect(()=>{
    const intervalId= setInterval(() => {
       console.log(count);
       Setcount((prevCount)=>{
        if(prevCount<=1){
            clearInterval(intervalId);
            return 0
        }
        return prevCount-1;
       });
    }, 1000);
}, []);
return(
    <div>
        <h3>Count{count}</h3>
    </div>
);

}
export default Timer;
