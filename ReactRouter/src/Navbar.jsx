import {Link} from "react-router-dom"; 
function Navbar(){
    
      return (
        <div style={
            {
              display:"flex",
              alignItem:"center",
              justifyContent:"space-around",
              textDecoration:"none",
      
            }}
            >
             <Link to="/">Home</Link>
             <Link to="/About">About</Link>
             <Link to="/Contact">Contact</Link>
           </div>
      );

}
export default Navbar;