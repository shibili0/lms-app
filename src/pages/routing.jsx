import React from "react";
import Dashboard from "./dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "./library";
import Courses from "./courses";
import MyLists from "./myLists";
import LoginPage from "./loginPage";
function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/library" element={<Library />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/myLists" element={<MyLists />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
