import React from 'react'
import ReactDOM from 'react-dom/client'
import MainRouter from './pages/MainRouter'
import './index.css'
import './pages/LoginPage/LoginForm.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainRouter/>  
  </React.StrictMode>
)
