import React,{useContext} from 'react'

import { StoreContext } from '../../../Context/Storecontext'
import Fooditem from"../Fooditem"
import"./style.scss"
const Index = ({category}) => {
    const{list}=useContext(StoreContext)
    return (
      
      <div className='mt-6' id="food_display"> 
       <h2 className='capitalize my-5 fw-700 fs-18 tl md-fs-20 md-tc'>top dish</h2>
       <div className="food_list  middle flex  gap-5 wrap  " >
        {list.map((item,index)=>{
          if(category==="All" || category===item.category){
            return<Fooditem key={index} id={item.id} name={item.title} price={item.price} image={item.image}/>
          }
          // return<Fooditem key={index}id={item.id} name={item.title} image={item.image}/>
  
          
        })}
        </div>
        
        </div>
    )
  }

export default Index