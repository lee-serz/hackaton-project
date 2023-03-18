import React from 'react'
import LoginForm from './LoginPage/LoginForm'
import RegisterForm from './RegisterPage/RegisterForm'
import { BrowserRouter, Route, Routes} from 'react-router-dom';


const MainRouter = () => {
  return ( 
  <BrowserRouter>
    <Routes>
        <Route element={<LoginForm/>} path='/login'/>
        <Route element={<RegisterForm/>} path='/register'/>
    </Routes>
  </BrowserRouter>
  )
}

export default MainRouter