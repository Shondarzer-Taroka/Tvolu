import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import "react-toastify/dist/ReactToastify.css";
// import Root from './Root/Root.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <HelmetProvider> 
    <AuthProvider> 
    <RouterProvider router={router}>
    </RouterProvider>
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
