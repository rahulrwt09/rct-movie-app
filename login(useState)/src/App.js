import React, {useState} from "react"



function App() {
 
    const [formData, setFormData]= useState({
      username:"",
      email:"",
      password:"",
      cpassword:"",
    });
    
  const handelInput= (event)=>{
    
    const name=event.target.name;
    
    const value =event.target.value;
   
    setFormData((prev)=>{
      return {...prev, [name]:value};
    });
  
  };


  return (
    <>
    <div className="App">
   
      <input 
      type="text"
      id="username"
      name="username"
      placeholder='enter username'
      value={formData.username}
      onChange={handelInput}
      ></input> <br/>

 
      
      <input 
      type="email"
      id="email"
      name='email'
      placeholder='enter email'
      value={formData.email}
      onChange={handelInput}
      ></input><br/>


      <input 
      type="password"
      id="password"
      name="password"
      placeholder='enter password'
      value={formData.password}
      onChange={handelInput}
      ></input>  <br/>


      <input 
      type="password"
      id="cpassword"
      name="cpassword"
      placeholder='enter confirm password'
      value={formData.cpassword}
      onChange={handelInput}
      ></input> <br/>
        <button  >register</button>
        <p>{`my name is ${formData.username} and email ${formData.email}`}</p>

       </div>
    </>
  );
}

export default App;
