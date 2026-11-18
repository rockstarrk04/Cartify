import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    document.title = 'Page Not Found'
  return (
    <>
        <h1 style={{color:'red',textAlign:'center'}}>Page Not Found</h1>
        <Link to='/'>Go to Home Page</Link>
    </>
  )
}

export default PageNotFound
