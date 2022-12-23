import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
function LoginForm() {
  return (
    <>
     <div className="loginForm">
      <h1>"Passion To Learn"</h1>
      <Form className="logForm">
        <Form.Group className="mb-3 loginFormGroup" controlId="formBasicEmail">
          
          <Form.Control type="Username" placeholder="Username" className="loginFormGroupControl" />
         
        </Form.Group>

        <Form.Group className="mb-3 loginFormGroup" controlId="formBasicPassword">
          
          <Form.Control type="password" placeholder="Password"  className="loginFormGroupControl"/>
        </Form.Group>
       
        <Button variant="primary" type="submit" className="button w-100">
          <Link to="/dashboard">Login</Link>
        </Button>
      </Form>
    </div>
    <Outlet />
    </>
  );
}

export default LoginForm;
