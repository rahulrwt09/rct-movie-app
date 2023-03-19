import React, { useState } from "react";

import Timer from "./Component/Timer"

export default function App(){
  const[ showTimer, setTimer]=useState(true);
  return (
    <div>
      {showTimer && <Timer/>}
      <button onClick={()=>
        setTimer(!showTimer)
      }>Show {""}</button>
        <h3>Show status-{setTimer?"True":"FalsE"}</h3>
     
    </div>
  )
}