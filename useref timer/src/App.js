import {useRef, useState, useEffect} from "react";

 // if ref.current return some kind of id it means interval is running if is showing null that means interval is not running for example ref.current = null
const fixTimeSting = (time)=>{
  return time<10?`0${time}`:time ;
 };
 const formatTimetostring= (time)=>{
   const sec= time%60;
   const  min= Math.floor(time/60)%60;
  const outputString=`00:${fixTimeSting(min)}:${fixTimeSting(sec)}`;
  return outputString;
 };


export default function App() {
    const [timer, setTimer]= useState(90);
    let ref= useRef(null);



    useEffect(()=>{
      const cleanup= ()=>{
        stopTimer();
      };
      return cleanup;
    }, []);

    const startTimer= ()=>{
      console.log("run");
      if(ref.current!==null){
        return;
      }
       
    ref.current= setInterval(()=>{
      setTimer((prevTime)=>{
        if(prevTime<=1){
          clearInterval(ref.current);
          return 0;
        }
        return prevTime-1;
      });
    },1000);
  };
    
   

   const stopTimer= ()=>{
     clearInterval(ref.current);
     ref.current = null;
   }
const resetTimer = ()=>{
  stopTimer();
  setTimer(0);

}
  return (
    <>
    <div className="App">
       <h3>Time:{formatTimetostring(timer)}</h3>
       <button onClick={startTimer}>Start</button>
       <button onClick={stopTimer}>Stop</button>
       <button onClick={resetTimer}>Reset</button>
    </div>
    </>
  );
}
