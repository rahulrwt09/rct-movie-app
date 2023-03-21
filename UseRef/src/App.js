import {useRef, useState} from "react";
import './App.css';
   
function App() {
   const [text, setText]= useState("");
   const inputRef= useRef(null);
   const addTodo= () =>{
    console.log(text);
    setText("");
    inputRef.current.focus();
   };
  return (
    <div className="App">
        <input
          ref={inputRef}
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />
      <button onClick= {addTodo}>Add</button>
    </div>
  );
}

export default App;
