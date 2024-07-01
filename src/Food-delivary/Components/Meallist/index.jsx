import React from 'react'
import "./style.scss"
const Index = (getMeal) => {
  console.log(getMeal.data)
  return (
    <>
    {/* <div className="card-header"> */}
      <div className="card r-5  my-15">
        <div className="image__block mb-20">
        <img  src={getMeal?.data?.strMealThumb}/>
        </div>
    <div className="info pt-2">
    <h2 className='fs-16 fw-500 tl'>{getMeal?.data?.strMeal}</h2>
    <p className='fs-14 fw-400'> {getMeal?.data?.strArea}food</p> 
    </div>
   </div>
   {/* <div className="recipe">
    <h2 className='mb-2'>recipe</h2> */}
    {/* <p className='fs-10'>{getMeal.data.strInstructions}</p>  */}
    {/* <img  src={getMeal?.data?.strMealThumb}/>  */}
   {/* <a  className="center block"href={getMeal?.data?.strSource}>watch vedio</a> */}
   {/* </div>  */}
     {/* </div>  */}
  
    </>
  )
}

export default Index