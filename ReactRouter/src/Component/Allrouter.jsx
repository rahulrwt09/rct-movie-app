import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import {Routes, Route } from "react-router-dom"
import User  from '../Pages/Users';
function Allroute(){
  return (

    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/User" element={<User/>}></Route>
  </Routes>
  );
}
export default Allroute;