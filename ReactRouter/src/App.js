import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import './App.css';
import {Routes, Route, Link} from "react-router-dom"
function App() {
  
    
  

  return (
    <>
     <div style={
      {
        display:"flex",
        alignItem:"center",
        justifyContent:"space-between",

      }}
      >
       <Link to="/">Home</Link>
       <Link to="/About">About</Link>
       <Link to="/Contact">Contact</Link>
     </div>
     
    <div className="App">
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/contact" element={<Contact/>}></Route>
       </Routes>
    </div>
    </>
  );
}
 
export default App;
