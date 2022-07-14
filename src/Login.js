import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import {login} from './features/user'

const Loginpage = () =>{
    const dispatch = useDispatch();
    const [name,setname] = useState('')
    const [age,setage] = useState('')
    const [email,setemail] = useState('')
    const [color,setcolor] = useState('')



    return(
        <>
        <hr></hr>
        <div>
            <h1>Login</h1>
            <input type='text' placeholder="Name" onChange={(p)=>setname(p.target.value)} ></input><br></br>
            <input type='number' placeholder="Age" onChange={(p)=>setage(p.target.value)} ></input><br></br>
            <input type='text' placeholder="Age" onChange={(p)=>setemail(p.target.value)} ></input><br></br><br></br>
            <input type='color'  onChange={(p)=>setcolor(p.target.value)} ></input><br></br><br></br>
        <button onClick={() => dispatch(login({name:name,age :age , email : email ,color : color}))}>Login</button>	&nbsp;
        <button onClick={() => dispatch(login({name:'',age :0 , email : ''}))} > Logout</button>
        </div>
        </>
    )

}

export default Loginpage