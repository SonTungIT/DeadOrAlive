import React, { useState } from 'react';
import config from '~/config';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [isError, setisError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSignup = async (event) => {
        event.preventDefault();

        let data = { username, password, firstName, lastName, email, phone };

        try {
            const response = await axios
                .post('https://project-game-rpg.herokuapp.com/api/v1/users/signUp', data)
                .then((response) => {
                    if (response.data.response.message === 'Account Created') {
                        navigate('/user');
                        console.log('check response ==> ', response);
                    }
                    // setData(response.data.response);
                });
        } catch (error) {
            console.log('check error ==> ', error);
        }
    };

    const checkValidation = (e) => {
        const confPass = e.target.value;
        setConfirmPassword(confPass);
        if (password !== confPass) {
            setisError('Xác thực mật khẩu chưa chính xác!');
        } else {
            setisError('');
        }
    };

    return (
        <div className="Container">
            <div className="logo-game">
                <img src="./images/DOA-3.png" alt="" />
                <div className="auth-form-container">
                    <h2>ĐĂNG KÝ</h2>

                    <form className="register-form" onSubmit={handleSignup}>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            placeholder="TÊN NGƯỜI DÙNG"
                            id="username"
                            name="username"
                        />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="MẬT KHẨU"
                            id="password"
                            name="password"
                        />
                        <input
                            value={confirmPassword}
                            onChange={(e) => checkValidation(e)}
                            name="confirmPassword"
                            type="password"
                            placeholder="XÁC THỰC MẬT KHẨU"
                        />
                        <div className="error-confirm">{isError}</div>

                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            placeholder="Tên"
                            id="firstName"
                            name="firstName"
                        />
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            placeholder="Họ"
                            id="lastName"
                            name="lastName"
                        />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
                        />
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="number"
                            placeholder="Số Điện Thoại"
                            id="email"
                            name="email"
                        />

                        <button className="btn-icon-arrow" type="submit">
                            {/* <Link className="link-btn" to={config.routes.information}>
                                <p></p>
                            </Link> */}
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
