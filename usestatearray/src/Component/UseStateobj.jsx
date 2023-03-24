import react, {useState} from "react";
const Useobj = ()=>{
    const obj1= {name:"Jholu", age:23, place:"Dehradun"}

    const [obj, setobj]= useState(obj1);
    console.log(obj);
    const change=()=>{
        setobj({...obj, name:"golu"});
    }
 return(
   <>
     <div>
        <h1>name:{obj.name} age:{obj.age}</h1>
        <button onClick={change}>Update</button>
     </div>
   </>
 )
}
export default Useobj