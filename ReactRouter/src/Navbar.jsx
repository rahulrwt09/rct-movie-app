import {Link, NavLink} from "react-router-dom";
const   links= [
      {path:"/", text:"Home"},
      {path:"/about", text:"About"},
      {path:"/Contact", text:"Contact"},
];
function Navbar(){
       const defaultcolor= {
            color:"black",
        
            textDecoration:"none",

       }

       const activecolor= {
            color:"green",
            backgroundColor:"Pink",
            textDecoration:"none",

       }
      return (

        <div style={
            {
              display:"flex",
              alignItem:"center",
              justifyContent:"space-around",
              textDecoration:"none",
      
            }}
            >
             {links.map((link)=>(
                
          <NavLink 
            style={({isActive})=>{return isActive?activecolor:defaultcolor}
            
            }
          
           
          key={link.path} to={link.path} >
           {link.text}
           
          </NavLink>
             ))}
   
           
            
           </div>
      );

}
export default Navbar;