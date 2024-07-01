import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import './index.scss'
import StoreContextProvider from './Context/Storecontext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
