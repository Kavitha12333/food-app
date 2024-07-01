import React,{useState} from 'react'

const Index = () => {
    const[search,setSearch]=useState("");
    // const data=fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=d5c49788&app_key=%20670e1703e451c53d54c9edf99ba2dfa2%09%E2%80%94`)
    // const data=fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=d5c49788&app_key=%20670e1703e451c53d54c9edf99ba2dfa2%09%E2%80%94`).then(
    //     response=>response.json()
    // ).then(
    //     data=>console.log(data)
    // )
    // console.log(data)
    // data.then((responce)=>{
    //     responce.json().then((info)=>{
    //         console.log(info)
    //     })
    // })
    // data.catch((error)=>{
    //     console.log(error)
    // })
  return (
    <div>Index</div>
  )
}

export default Index

