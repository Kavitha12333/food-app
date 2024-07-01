import React, { useContext } from 'react'
import { StoreContext } from '../../../../Context/Storecontext'
import { useNavigate } from 'react-router-dom'
import"./style.scss"
const Index = () => {
  const navigate=useNavigate()
  const{getTotalCartAmount}=useContext(StoreContext)
  return (
   <>
   <form className="place_order flex col gap-y-8 xl-flex xl-space-between  xl-gap-x-10 xl-row mt-5">
<div className="place_order_left ">

  <p className='fs-18 tl fw-600 mb-4 md-fs-22 capitalize '> delivary information</p>
  <div className="multi_fields flex col gap-x-5 md-flex md-row fw-500 ">
    <input className=' mb-4 r-1' type="text" placeholder='first name'/>
    <input className='mb-4 r-1' type="text" placeholder='last name'/>
  </div>
  <div className="muti_fields flex col gap-x-5  md-flex md-row fw-500">
  <input className='mb-4 ' type="text"  placeholder="email adress"/>
  <input  className="mb-4 " type="text"  placeholder="street"/>
</div>
  <div className="muti_fields flex col gap-x-5  md-flex md-row fw-500">
  <input className='mb-4' type="text"  placeholder="city"/>
  <input className='mb-4' type="text"  placeholder="state"/>

  </div>
  <div className="muti_fields flex  col gap-x-5  md-flex md-row fw-500 ">
  <input className='mb-4' type="text"  placeholder="zip code"/>
  <input  className="mb-4" type="text"  placeholder="country"/>

  </div>
  <input className='fw-500' type="text" placeholder='phone' />
</div>
<div className="place_order_right flex ">
<div className="cart_total    ">
          <h2 className='pb-4 fs-18 fw-700'>Cart Total</h2>
          <div className='capitalize fs-14 md-fs-16 fw-600'>
            <div className="cart_total_details flex space-between  py-2 ">
              <p className=''>subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart_total_details flex space-between py-2 " >
          
              <p className=''>delivary fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr/>
             <div className="cart_total_details flex space-between py-2">
          
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
             </div>
            <button onClick={()=>navigate("/Aboutus")}  className='py-3 md-w-1\/ uppercase  r-1  mt-4 pointer fs-14 fw-600' style={{ color: "#fff", backgroundColor: "tomato" }}>proceed to payment</button>
            </div>
{/* <div className="cart_total flex col gap-4">
            <h2>Cart Total</h2>
            <div>
              <div className="cart_total_details flex space-between"style={{color:"#555"}}>
                <p>subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <div className="cart_total_details flex space-between"style={{color:"#555"}}>
                <p>delivary fee</p>
                <p>${2}</p>
              </div>
              
              <div className="cart_total_details flex space-between"style={{color:"#555"}}>
                <b>Total</b>
                <b>${getTotalCartAmount()+2}</b>
              </div>
              </div>
              <button  className='py-3 r-1 pointer'style={{color:"#fff", backgroundColor:"tomato"}}>proceed to payment</button>
            </div> */}
       
</div>

   </form>
   </>
  )
}

export default Index