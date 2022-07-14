import React from "react";
import {useSelector} from 'react-redux'
import {Image} from 'semantic-ui-react'

const Profile = () =>{
   const user = useSelector((state)=>state.user.value)
    console.log(user)
    
    return(
        <>
        <h1>Profile</h1>
        <div style={{color: user.color}}>
        <p >Name  : {user.name} </p>
        <p>Email : {user.email}</p>
        <p>Age   : {user.age}  </p>
        </div>
        </>
    )
}

export default Profile