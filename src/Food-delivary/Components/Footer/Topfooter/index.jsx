
import React from 'react'
import { asset } from "../../../../assets"
import{Link}from"react-router-dom"
import "./style.scss"
const Index = () => {
  return (
    <div className="top_footer py-6 mt-10" style={{ backgroundColor: "#323232", color: "#d9d9d9" }}>
      <div className="footer_content flex col space-between gap-y-6 px-10 md-flex md-row  md-gap-x-6 " >
        <div className="footer_content_left flex col  ">
            {/* <div className="footer_logo "> */}
            <img  src="images/logo.png"/>
            {/* </div> */}
          <p className='py-4 fs-14 md-fs-16 fw-500'>lorem ipsum is simply dummy text odf the printing and typesetting industry,lorem</p>
          <div className="social_icons  flex gap-x-2 wrap center md-flex md-tl pointer ">
            <img className='mt-3 r-20 p-2' src={asset.facebook} />
            <img className='mt-3 r-20 p-2' src={asset.instagram} />
            <img className='mt-3 r-20 p-2' src={asset.twitter} />
            <img className='mt-3 r-20 p-2' src={asset.youTube} />
          </div>
        </div>
        <div className="footer_content_center flex col">
          <h2 className='pb-2 uppercase fs-14 md-fs-16 tc md-tl fw-700' style={{color:"#fff"}}>company</h2>
          <ul className='tc md-tl pointer capitalize'>
         <li className='mb-2  fs-14 md-fs-16  fw-500 ' > Home</li>
         <li className='mb-2 fs-14 md-fs-16 ' style={{color:"#fff"}}><Link to="/Aboutus"> about us</Link></li>
            <li className='mb-2 fs-14 md-fs-16 fw-500'>delivary</li>
            <li className='mb-2 fs-14 md-fs-16 fw-500' >privacy policy</li>
          </ul>
          {/* <li className='mb-2 fs-14 md-fs-16 fw-500' ><Link to="/Aboutus"> about us</Link></li> */}
        </div>
        <div className="footer_content_right flex col">
         <h2 className='pb-2 uppercase fs-14 fw-700 md-fs-16 tc md-tl' style={{color:"#fff"}}>getintouch</h2>
          <ul className='tc md-tl pointer capitalize'>
            <li className='mb-2 fs-14 md-fs-16 fw-500'>+1-234-345-4566</li>
            <li className='mb-2 fs-14 md-fs-16 fw-500 '>contact@prom.com</li>
          </ul>
        </div>
      </div>
      <hr className='my-4'></hr>
      <p className=' fs-14 md-fs-16 fw-500'>copyright 2024 promo.com -all right reserved.</p>
    
    </div>
  )
}

export default Index