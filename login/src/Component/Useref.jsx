import {useRef, useState} from "react";

const Uncontrolform = () =>
{

     const name=useRef(null);
     const[show, setShow]=useState(false)
    const SubmitForm= (e)=>{
        e.preventDefault();
        console.log(name.current.value)
         
    name===""?alert("Fill blank"):setShow(true);
    }
  
return(
<>
<div>
    <form action="" onSubmit={SubmitForm}>
    <div>
        <label htmlFor="name">
            Enter Your name
        </label>
        <br/>
        <input type="text" id="name" ref={name}/>
        <button>
            Submit
        </button>
    </div>
    </form>
    <p>{show?`name ${name.current.value}`:" "} </p>
</div>
</>
 
);

    

}
export default Uncontrolform;
