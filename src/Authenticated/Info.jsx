import React, { useState } from "react";
import config from "../config";
import { Link } from "react-router-dom";

function Infomation() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confirm_e, setConfirm_e] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    }

    return (
        <div className="logo-game">
            <img src="./images/DOA-3.png" alt="" />
            <div className="auth-form-container">
                <h2>THÔNG TIN NGƯỜI CHƠI</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="HỌ VÀ TÊN" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="EMAIL " id="email" name="email" />
                </form>
            </div>
        </div>
    )
}

export default Infomation;