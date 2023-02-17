import React, { useState, useEffect } from "react";
import config from "../config";
import { Link } from "react-router-dom";
import { auth, provider } from "./firebase";
import {signInWithPopup} from "firebase/auth";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }
    //Cong add
    const [value, setValue] = useState('');
    const handleClick = () => {
        signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email)
        })
    }
    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })
    return (
        <div className="logo-game">
            <img src="./images/DOA-3.png" alt="" />
            <div className="logo-game">
                <div className="auth-form-container">
                    <h2>ĐĂNG NHẬP</h2>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input value={username} onChange={(e) => setUsername(e.target.value)}
                            type="text" placeholder="TÊN NGƯỜI DÙNG" id="username" name="username" />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} 
                            type="password" placeholder="MẬT KHẨU" id="password" name="password" />
                        <button className="btn-icon-arrow" type="submit">
                            <Link className="login-form" to={config.routes.information}></Link>
                        </button>
                    </form>
                    <button className="link-btn" onClick={handleClick}>
                        <Link className="link-btn" to={config.routes.information}>Signin With Google</Link>
                    </button>
                    <button className="link-btn" onClick={""}>
                        <Link className="link-btn" to={config.routes.register}>TẠO TÀI KHOẢN</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;