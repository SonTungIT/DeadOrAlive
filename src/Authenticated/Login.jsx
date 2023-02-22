import React, { useState, useEffect } from "react";
import config from "../config";
import { useNavigate , Link } from "react-router-dom";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { authService } from "../service/authService";
import './Login.css';


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
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        })
    }
    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })
    //token API
    const navigate = useNavigate();
    const signWithGoogle = async () => {
        const token = await authService.loginWithGoogle();
        console.log("Token:", token);
        const role = localStorage.getItem("student");
        if (role === "Admin") {
            navigate("./Admin");
        } else {
            console.log("Tôi là user");
        }
    }


    return (
        <div className="Container">
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
                                <Link className="link-btn" to={config.routes.information}></Link>
                            </button>
                            <button onClick={signWithGoogle}>
                                <Link className="google-btn" to={config.routes.user}></Link>
                            </button>
                        </form>
                        <button onClick={""}>
                            <Link className="link-btn" to={config.routes.register}>TẠO TÀI KHOẢN</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;