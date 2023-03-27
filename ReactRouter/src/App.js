

import './App.css';
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
       <Routes>
         <Route path="/" element={<h1>Home</h1>}></Route>
         <Route path="/about" element={<h1>About</h1>}></Route>
         <Route path="/contact" element={<h1>Contact</h1>}></Route>
       </Routes>
    </div>
  );
}

export default App;
