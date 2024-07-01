import {useState, createContext, useEffect } from "react";
import {list} from"../Food-delivary/Components/data"
export const StoreContext=createContext(null)
const StoreContextProvider=(props)=>{
const[cartItems,setCartItems]=useState({})

const addtoCart = (itemId)=>{
    if(!cartItems[itemId])
        {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    
}
const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems){
        if(cartItems[item]>0){
        let itemInfo = list.find((product)=>product.id ==item)
        totalAmount += itemInfo.price* cartItems[item]
    }
}
return totalAmount;
}
// useEffect(()=>{
// console.log(cartItems)
// },[cartItems])

    const contextValue={
list,
cartItems,
setCartItems,
addtoCart,
removeFromCart,
getTotalCartAmount



}  
return(
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
) 
}
export default StoreContextProvider