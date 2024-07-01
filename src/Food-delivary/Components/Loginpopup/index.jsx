import React,{useState} from 'react'
import "./style.scss"
const Index = ({setShowlogin}) => {
  const[currentstate,setCurrentstate]=useState("sign up")
  return (
    <div className="login_popup ">
      <form className='login_popup_container flex col gap-y-4 py-2 px-4'>
          <div className="title flex space-between middle">
            <h2 className='fs-16 fw-500'>{currentstate}</h2>
            <img className='image-contain' onClick={()=>setShowlogin(false)} src="images/close.png"alt=""/> 
          </div>
          <div className="inputs flex col gap-y-4 fw-500 ">
            { currentstate === "login"?<></>
            :<input className='p-2 r-1' type="text" placeholder='your name'required/>}
            <input  className='p-2 r-1'type="email" placeholder='your email'required/>
            <input className='p-2 r-1' type="password" placeholder='password'required/>

          </div>
<button className='p-2 r-1 pointer fs-16 fw-600'>{currentstate==="sign up"?"create account":"login"}</button>
      <div className="popup_condition flex top gap-2">
       <input className='mt-1' type="checkbox" required/>
       <p className='fs-14 fw-500'> by continuing, i agree to the terms of use & privacy policy</p> 
      </div>
      {currentstate==="login"
      ?<p  className='fs-14 fw-500'>create new account?<span onClick={()=>setCurrentstate("singn up")}>click here</span></p>
      :<p className='fs-14 fw-500'>already have a account?<span onClick={()=>setCurrentstate("login")}>login here</span></p>
  }
      </form>
    </div>
  )
}

export default Index