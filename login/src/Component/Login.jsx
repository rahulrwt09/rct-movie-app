import  {useState} from 'react'

function Login(){
const   [email, setEmail ]= useState(" ")
const   [password, setPassword]= useState(" ")
const   [allentry, setallentry]= useState([])



 const Submit= (e)=>{
  e.preventDefault();
  if(email && password){
  const newentry= {email:email, password:password}
  setallentry([...allentry, newentry])
  console.log(allentry);
  setEmail("")
  setPassword("")
 } 
 else{
    alert("Fill in the blanks")
 }
}



   return(
    <>
    <form onSubmit={Submit}>
       <label htmlFor='email'>
        Email
       </label>
     <input
     type='text'
     name='email'
     id='email'
    placeholder='Email'
    onChange={(e)=>setEmail(e.target.value)}
    />

<label htmlFor='password'>
        Password
       </label>
     <input
     type='password'
     name='password'
     id='pass'
    placeholder='password'
    
    onChange={(e)=>setPassword(e.target.value)}

    />
    <button type="submit">Submit</button>

    </form>
    <div>
       {
        allentry.map( (el)=>{
            return (
              <div>
            
              <p>{el.email}</p>
              <p>{el.password}</p>
              </div>
            ) 
        } )
       }
    </div>
    </>
  );


}
export  default Login;