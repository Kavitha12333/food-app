import React,{useContext, useState} from 'react'
import "./style.scss"
import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { StoreContext } from '../../../../Context/Storecontext';
const Index = ({setShowlogin}) => {
  const [menu,setMenu]=useState("home")
  const{getTotalCartAmount}=useContext(StoreContext)
  const[ismenu,setIsmenu]=useState()
  const[ismobile,setIsmobile]=useState(false)
  return (
    <div className="top_header flex  row  middle  space-between">
      <div className="logo">
      <Link to="/"> <img className=' image-contain' src="images/logo.png" /></Link> 
    </div>
    <div className= "nav">
      <div className={ismobile?"mobile_link":"nav_link"}>
        <ul className="menu  capitalize flex col  lg-flex lg-row lg-gap-x-8 lg-fs-20  " >
          <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}><Link className='header fw-600  '  to="/">home</Link></li>
         <li onClick={()=>setMenu("cart")} className={menu==="cart"?"active":""}> <Link  className='header fw-600 ' to="/Cart"><ShoppingCartIcon/></Link></li>
          <li  onClick={()=>setMenu("contact")}className={menu==="contact"?"active":""}><Link className='header fw-600 ' to="/Contact">Contact</Link></li>
        <button className='header   capitalize r-6 fw-600' onClick={()=>setShowlogin(true)}>sign in</button><Link/>
          </ul>
                </div>
              
                <button className='menu_icon lg-hide ' onClick={()=>setIsmobile(!ismobile)}>{ismobile?<CancelRoundedIcon className='mt-5'/>:<MenuIcon/>}</button>

      <div className="right__nav">
        <img src=""/>
        {/* <div className={getTotalCartAmount()===0?"":""}>
          
        </div> */}
      
      </div>
      </div>
      </div>
  )
}

export default Index