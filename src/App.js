import React, { useState } from "react";
import './App.css';
import { Routes, Route, Link, useHref } from 'react-router-dom'
import Login from "../src/Authenticated/Login"
import Register from "./Authenticated/Register";
import Info from "./Authenticated/Info";
import User from "./Home/User/User";

function App() {
  return (
    <div className="App">
      {/* <div>
        <nav>
          <ul>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </div> */
      }
      

      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/information" element={<Info />} />
        <Route path="/user" element={<User />} />

      </Routes>
    </div>
  );
}

export default App;
