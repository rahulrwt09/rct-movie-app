import {Link} from "react-router-dom";
const   links= [
      {path:"/", text:"Home"},
      {path:"/about", text:"About"},
      {path:"/Contact", text:"Contact"},
];
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
             {links.map((link)=>(
                
          <Link key={link.path} to={link.path} >
           {link.text}
           
          </Link>
             ))}
   
           
            
           </div>
      );

}
export default Navbar;