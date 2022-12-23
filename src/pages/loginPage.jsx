import React from 'react'
import { Image } from 'react-bootstrap'
import LoginForm from '../components/loginForm'
function LoginPage() {
  return (
    <div className="loginParent">
        
        <Image src= {require("../images/humble.jpg")} style={{width:"300px", height:"300px", border:"2px solid #EF115E"}} roundedCircle  className='loginImage'/>
        
    
            <LoginForm />
        

    </div>
  )
}

export default LoginPage