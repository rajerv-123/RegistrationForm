import React from 'react'
import { Link } from "react-router-dom";
 

const EditProWelcome=()=> {

  return (
    <div className='container'>
      <h1>"Profile successfully updated"</h1>
      <Link  as={Link} to="/login">
        <button>Login</button>
      </Link>
    </div>
  )
}

export default EditProWelcome
