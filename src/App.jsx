import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { fasion } from './Food-delivary/Components/data'
import Header from"./Food-delivary/Components/Header"
import Footer from"./Food-delivary/Components/Footer"
import Aboutus from"./Food-delivary/Components/Pages/Aboutus"
import Home from"./Food-delivary/Components/Pages/Home"
import Cart from"./Food-delivary/Components/Pages/Cart"
import Contact from"./Food-delivary/Components/Pages/Contact"
import Placeorder from"./Food-delivary/Components/Pages/Placeoreder"
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom'
import { FormatQuoteRounded } from '@material-ui/icons'
function App() {
  // const[showlogin,setShowlogin]=useState(false)
//   const[gfasion,setGfasion]=useState(fasion)
// console.log(gfasion)
  return (
    <>
  {/* {showlogin? <Loginpopup/>:<></>}   */}
    <Router>
      <Header/>
     
    <Routes>
    {/* <Route path="/" element={<Food-delivary />}/> */}
    <Route path="/" element={<Home />}/>
   <Route path="contact" element={<Contact />}/>:
   <Route path="/cart" element={<Cart />}/>
   <Route path="/aboutus" element={<Aboutus />}/>
    <Route path='/order' element={<Placeorder/>}/>
    </Routes>
    <Footer/>
    </Router>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
