import { useState, useEffect } from "react";
function Timer(){
    const[count, setCount]=useState(10);

useEffect(()=>{
    const intervalid= setInterval(()=>{
    console.log(count);
    setCount((prevcount)=>{
        if(prevcount<=1){
        clearInterval(intervalid);
        return 0;
    }
    return prevcount-1;
});
},1000);

const clean = ()=>{
    clearInterval(intervalid);
    console.log("cleaup function called");
};
return clean;
}, []);
return (
    <div>
        <h2>count{count}</h2>
    </div>
);
}
export default Timer;