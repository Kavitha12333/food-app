
import React, { useState } from 'react'
import Exploremenu from"../../Exploremenu"
import Fooddisplay from"../../Fooddisplay"
import Appdownload from"../../Appdownload"
import"./style.scss"
import Banner from"../../Banner"
const Index = () => {
  const[category,setCategory]=useState("All")
  return (
    <div className='home_container'>
      <Banner/>
      <Exploremenu category={category} setCategory={setCategory}/>
   <Fooddisplay/>
   <Appdownload/>
    </div>
  )
}

export default Index