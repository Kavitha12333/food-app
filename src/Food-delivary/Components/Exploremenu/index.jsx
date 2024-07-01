import React from 'react'
import"./style.scss"
import{list} from"../data"
const Index = ({category,setCategory}) => {
  return (
    <>
  
    <h1 className='mt-4 capitalize pb-2 fw-700 fs-16 md-fs-20'>explore our menu</h1>
    <p className='fw-500 fs-14 capitalize pb-4 md-fs-16'>choose from a devrse menu featuring a delectable array of dishes</p>
    <div className='image_list flex wrap   middle gap-5'>
  {list.map((item,index)=>{
    return(
      <div onClick={()=>setCategory(prev=>prev===item.title?"All":item.title)} key={index} className=' explore_menu  '>
        <img  className={category===item.title?"active":""}src={item.image}/>
        <p className='fs-12 fw-500'>{item.title}</p>
        </div>
    )
  })}

    </div>
    {/* <hr></hr> */}
    </>
  )
  
  
}

export default Index