import React, { useState } from "react";
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Login from "../src/Authenticated/Login"
import Register from "./Authenticated/Register";
import Info from "./Authenticated/Info";

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
      </div> */}

      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/information" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
