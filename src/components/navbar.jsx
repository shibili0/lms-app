import React from "react";
import { Nav, Image } from "react-bootstrap";
import { Outlet, NavLink } from "react-router-dom";
import {  FaBell } from "react-icons/fa";
function Navbar() {
  return (
    <>
      <div className="topNav">
        <Nav>
          <Nav.Item>
           <FaBell className="bellicon" style={{color: '#EF115E', fontSize: '25px'}}/>
          </Nav.Item>
          <Nav.Item>
          <Image src= {require("../images/propic.jpeg")} style={{width:"55px", height:"55px", border:"2px solid #EF115E"}} roundedCircle />
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <Nav.Link as={NavLink} eventKey="link-0" to="/dashboard">
              <li>Dashboard</li>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} eventKey="link-1" to="/courses">
              <li>Courses</li>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} eventKey="link-2" to="/library">
              <li>Library</li>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} eventKey="link-3" to="/myLists">
              <li>My Lists</li>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
