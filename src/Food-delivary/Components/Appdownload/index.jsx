import React from 'react'
import"./style.scss"
import { background } from '../../../../public/images'
const Index = () => {
  return (
    <div className="appdownload tl md-tc">
        <p className='mt-5  mb-4 fs-16 capitalize fw-500'>for better experience download<b>promo app</b></p>
        <div className="appdownload_platforms flex  col gap-4 md-center md-flex md-row md-x-4">
            <img src="images/footer/google_ply.png"/>
            <img className={{color:"red"}}src="images/footer/app_store.png"/>
        </div>
    </div>
  )
}

export default Index