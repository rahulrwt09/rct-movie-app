import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import './App.css';
import {Routes, Route} from "react-router-dom"
function App() {
  
  
  

  return (
    <div className="App">
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/contact" element={<Contact/>}></Route>
       </Routes>
    </div>
  );
}
 
export default App;
