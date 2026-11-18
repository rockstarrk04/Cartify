import React, { useState } from 'react'
import { toast } from 'react-toastify'

const AdminLogin = () => {
  let [formdata, setformdata] = useState({
    email: "",
    password: ""
  })

  let [error, seterror] = useState({
    email: false,
    password: false
  })

  let handleinput = (e) => {
    let key = e.target.name
    let val = e.target.value

    setformdata({
      ...formdata,
      [key]: val
    })

    seterror({
      ...error,
      [key]: false
    })
  }

  let handlesubmit = (e) => {
    e.preventDefault()

    let { email, password } = formdata

    let credentials = {
      admin_email: "Admin@gmail.com",
      admin_password: "Admin@123"
    }

    let { admin_email, admin_password } = credentials

    if (email !== admin_email) {
      seterror({
        email: true,
        password: false
      })
      toast.error("Email is Invalid")
    }
    else if (password !== admin_password) {
      seterror({
        email: false,
        password: true
      })
      toast.error("Password is not correct")
    }
    else {
      seterror({
        email: false,
        password: false
      })
      toast.success("Login Success")
    }
  }

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          type="email"
          placeholder="Admin Email Address"
          onChange={handleinput}
          name="email"
          value={formdata.email}
          style={{
            border: error.email ? "solid 2px red" : "solid 1px black"
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={handleinput}
          name="password"
          value={formdata.password}
          style={{
            border: error.password ? "solid 2px red" : "solid 1px black"
          }}
        />

        <button>Admin Login</button>
      </form>
    </>
  )
}

export default AdminLogin