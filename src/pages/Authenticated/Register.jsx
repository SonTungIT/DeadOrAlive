import React, { useState } from 'react';
import config from '~/config';
import { Link } from 'react-router-dom';
import './Login.scss';

function Register() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirm, setConfirm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <div className="Container">
            <div className="logo-game">
                <img src="./images/DOA-3.png" alt="" />
                <div className="auth-form-container">
                    <h2>ĐĂNG KÝ</h2>
                    <form className="register-form" onSubmit={handleSubmit}>
                        {/* <label htmlFor="name"></label> */}
                        {/* <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="HỌ VÀ TÊN" /> */}
                        {/* <label htmlFor="email"></label> */}
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="TÊN NGƯỜI DÙNG"
                            id="email"
                            name="email"
                        />
                        {/* <label htmlFor="password"></label> */}
                        <input
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            type="password"
                            placeholder="MẬT KHẨU"
                            id="password"
                            name="password"
                        />
                        <input
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                            name="confirm"
                            id="confirm"
                            placeholder="XÁC THỰC MẬT KHẨU"
                        />
                        <button className="btn-icon-arrow" type="submit">
                            <Link className="link-btn" to={config.routes.information}>
                                <p></p>
                            </Link>
                        </button>
                    </form>
                    <button onClick={''}>
                        <Link className="link-btn" to={config.routes.login}>
                            ĐÃ CÓ TÀI KHOẢN ?
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;
