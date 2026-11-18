import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import PageNotFound from './Components/PageNotFound'
import ForgetPassword from './Pages/ForgetPassword'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<ForgetPassword/>} path='/forget'/>
        <Route element={<PageNotFound/>} path='/*'/>

      </Routes>
    </>
    
  )
}

export default App
