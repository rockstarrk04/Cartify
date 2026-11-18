import React, { useState } from 'react'
import AdminLogin from './Admin/AdminLogin'
import UsersLogin from './Users/UsersLogin'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  let [bool , setBool] =useState(true)
  let handleBool = ()=>{
    setBool(!bool)
  }
  return (
    <>
      <div className="landing-page">
        <div className="container">
          <div className="btnbox">
            <button 
              onClick={handleBool}
              className={bool ? 'left' : 'ryt'}
             >
              {bool ? 'Admin' : 'Users'}
            </button>
          </div>
          <div className="formbox">
            <h2>{bool ? 'Admin Login' : 'Users Login'}</h2>
            <div>
              {bool ? <AdminLogin/> : <UsersLogin/>}
            </div>
          </div>
          <div className="forgetten">
            <Link to='/forget'>
              Forget Password ?
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
