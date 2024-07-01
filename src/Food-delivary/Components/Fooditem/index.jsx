import React from 'react'
import { useContext,useState } from 'react'
import"./style.scss"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { CloseIcon1 } from '../../../Res/icon'
import { StoreContext } from '../../../Context/Storecontext'
const Index = ({name,image,id,price}) => {
const{cartItems,addtoCart,removeFromCart}=useContext(StoreContext)
  return (
    <div className='fooditem '>
        <div className="image_container  relative">
            <img className='image-contain' src={image} alt=""/>
           
            {
                !cartItems[id]
                ?<img className="add" onClick={()=>addtoCart(id)}src="images/close.png" alt="hi"/>:
                <div className='food_item_counter flex '>
                    <p onClick={()=>removeFromCart(id)}><RemoveCircleOutlineIcon/> </p>
                    <p>{cartItems[id]}</p>
                    <p onClick={()=>addtoCart(id)}> <AddCircleIcon/></p>  
                    </div>
            } 
          {/* {
                !itemcount
                ?<img className="add" onClick={()=>setItemcount(prev=>prev+1)}src="images/close.png" alt="hi"/>:
                <div className='food_item_counter flex '>
                    <p onClick={()=>setItemcount(prev=>prev-1)}><RemoveCircleOutlineIcon/> </p>
                    <p>{itemcount}</p>
                    <p onClick={()=>setItemcount(prev=>prev+1)}> <AddCircleIcon/></p>  
                    </div>
            }  */}
            
        </div>
        <div className="info capitalize pb-7 px-12">
            <p className='py-2 fw-600 fs-16'>{name}</p>
            <p className='fw-500 fs-16 'style={{color:"green"}}>price:${price}</p>
        </div>
     
      
    </div>
  )
}

export default Index