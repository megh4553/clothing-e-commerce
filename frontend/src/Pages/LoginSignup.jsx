import React, { useState } from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  const [st, setSt] = useState('Login');
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:"",

  });
  const changHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }


  const login = async ()=>{
    console.log("login Function Executed",formData);
    let resData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify(formData),
    }).then((res)=>res.json()).then((data) => resData = data)

    if(resData.success){
      // console.log("helloluya")
      localStorage.setItem('auth-token',resData.token);
      window.location.replace("/");
    }
    else{
      alert(resData.errors)
    }
  }
  const singup = async ()=>{

    console.log("Signup Function Executed",formData);
    let resData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify(formData),
    }).then((res)=>res.json()).then((data) => resData = data)

    if(resData.success){
      // console.log("helloluya")
      localStorage.setItem('auth-token',resData.token);
      window.location.replace("/");
    }
    else{
      alert(resData.errors)
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{st}</h1>
        <div className="loginsignup-fields">
          {st==="Sign Up" ? <input name='username' type="text" value={formData.username} onChange={changHandler} placeholder='Your Name' />:<></>}
          <input name='email' value={formData.email} onChange={changHandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changHandler} type="password" placeholder='Enter Password'/>
        </div>
        <button onClick={()=>{st==="Login"?login():singup()}}>Continue</button>
        {
          st==="Sign Up" ?
          <p className='loginsignup-login'>Already have an account?<span style={{cursor : "pointer"}} onClick={()=>setSt("Login")}>Login here</span></p> :  
          <p className='loginsignup-login'>Create New Account<span style={{cursor : "pointer"}} onClick={()=>setSt("Sign Up")}>Click here</span></p>
        }
      
      
       <div className="loginsignup-agree">
        <input type="checkbox" name='' id=''/>
        <p>By Continuing, I agree to the terms of use & privacy policy.</p>
       </div>
      </div>  
    </div>
  )
}

export default LoginSignup;
