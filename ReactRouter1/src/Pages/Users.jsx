import {useEffect, useState, useContext} from "react"
import { AuthContext } from "../Context/Authcontext";

import {Link,Navigate} from "react-router-dom"
const User= () =>{
    const [data, setData]= useState({});
    const {isAuth}= useContext(AuthContext)
    useEffect(()=>{
      fetch('https://reqres.in/api/users?page=1')
      .then((res)=>res.json())
      .then((res)=>setData(res))
      .catch((err)=>console.log(err));
    }, [])
    console.log(data);

    if(!isAuth){
        return <Navigate to="/Login"/>
    }
    return (
        <>
            <h1>
                Users Page
            </h1>
            {data&&
            
            data?.data &&
    data?.data?.map((user)=>(<p key={user.id}><Link to={`/user/${user.id}`}>{user.first_name} {user.last_name}</Link></p>))}
        </>
    );
};
export default User;