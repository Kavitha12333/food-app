
import React, { useState } from 'react'
import Bottomheader from"./Bottomheader"
import Topheader from"./Topheader"
import Loginpopup from"../Loginpopup"
import "./style.scss"
const Index = () => {
  const[showlogin,setShowlogin]=useState(false)
  const[category,setCategory]=useState("All")
  return (
    <div className='header'>
      {showlogin?<Loginpopup setShowlogin={setShowlogin} />:<></>}
      <Topheader setShowlogin={setShowlogin} />
      <Bottomheader/>
  
      {/* <Bottomheader category={category} /> */}
   
    </div>
  )
}

export default Index