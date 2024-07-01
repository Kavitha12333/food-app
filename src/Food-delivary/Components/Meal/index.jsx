import React,{useEffect, useState} from 'react'
import Mealist from"../Meallist"
import "./style.scss"
const Index = () => {
    const[search,setSearch]=useState([])
    const[Mymeal,setMeal]=useState([])

     const searchMeal=(evt)=>{
    if(evt="Enter")
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  .then(res=>res.json()
).then(data=>{
  // console.log(data)
  setMeal(data.meals)

})
      }

    
    
  return (
    <>
    <div className="search_meal py-20">
    {/* <img src="https://www.themealdb.com/images/media/meals/58oia61564916529.jpg"/> */}
    <div className="heading">
        <h1 className='fs-16 fw-700 capitalize  md-fs-20'>search your food recipe</h1>
        <p className='fs-14 fw-500 capitalize py-2 md-fs-16'>lorem ipsum dolor sit, consectetur elit</p>
    </div>
{/* {Mymeal} */}
    <div className="searchbox  " >
      <input type='search' className='search-bar' placeholder='Enter food' onChange={(e)=>setSearch(e.target.value)} value={search} onClick={searchMeal}
        
  />  </div>
    <div className="container flex  col md-flex md-row md-wrap  md-gap-x-10 ">
       
       {
      (Mymeal==null)?<p>not found</p>: Mymeal.map((res)=>{
          return(
            <div  >
            <Mealist data={res}/>
            </div>
          )
        })
       }
    </div>
  </div>
    </>
  )
}

export default Index