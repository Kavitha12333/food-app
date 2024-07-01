import React, { useState, useContext } from 'react'
import { StoreContext } from '../../../../Context/Storecontext'
import { useNavigate } from "react-router-dom"
import "./style.scss"
const Index = () => {
  const { cartItems, list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)
  const navigate = useNavigate();
  return (
    <div className="cart mt-10 tc">
    
      <div className="cart_items  ">
        <div className="cart_title flex row wrap middle space-between fs-14  capitalize sm-flex sm-row sm-space-between  sm-fs-12  md-flex md-row md-space-between md-fs-18 xl-flex xl-row xl-space-between " >
          <p className='fw-500' >items</p>
          <p className='fw-500' >  title</p>
          <p className='fw-500'> price</p>
        
          <p className='fw-500'> quality</p>
          <p className='fw-500'> total</p>
          <p className='fw-500'>remove</p>
        </div>
        <br />
        <hr />
        {list.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <div>
              <div className='cart_item_title cart_item middle  py-4 middle flex space-between wrap    fs-14 capitalize sm-flex sm-row sm-space-between  sm-fs-14 md-flex md-row md-space-between  md-fs-18 xl-flex xl-space-between'>
                <img src={item.image} />
                <p className='fw-400'>{item.title}</p>
                <p className='fw-400'>${item.price}</p>
                <p className='fw-400'>{cartItems[item.id]}</p>
                <p className='fw-400'>${item.price * cartItems[item.id]}</p>
                <p  onClick={() => removeFromCart(item.id)} className='crose pointer fw-400 '>X</p>
              </div>
              <hr/>
              </div>
            )
          }
        })}
        
      </div>
      <div className="cart_bottom mt-10 tl flex col gap-y-5 xl-flex xl-space-between xl-row  ">
        <div className="cart_total flex col    ">
          <h2 className='pb-4 tc fs-20 fw-500'>Cart Total</h2>
          <div className='capitalize fs-14 md-fs-16 fw-500'>
            <div className="cart_total_details flex space-between  py-2 " style={{ color: "#555" }}>
              <p className=''>subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart_total_details flex space-between py-2 " style={{ color: "#555" }}>
              <p className=''>delivary fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr/>
            <div className="cart_total_details flex space-between py-2" style={{ color: "#555" }}>
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
             </div>
            <button onClick={() => navigate('/order')} className='py-3 md-w-1\/ uppercase  r-1  mt-4 pointer fs-14 fw-600' style={{ color: "#fff", backgroundColor: "tomato" }}>proceed to checkout</button>
            </div>

        <div className="cart_promocode">
          <div>
            <p className='capitalize fs-16 fw-500' style={{ color: "#555" }}>If u have a promo code,enter it here</p>
            <div className="promocode_input mt-2 r-4 flex space-between mt-5 middle  fw-500" style={{ backgroundColor: "#eaeaea" }}>
          
               <input className='pl-2' type="text" placeholder='promo code' /> 
              <button  className='py-4 px-1 rtr-4 rbr-4 fw-500'>submit</button>
            </div>
            </div>
          </div>
        </div>
      </div>

    
  )
}

export default Index