import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import config from '~/config';
import { useNavigate, Link } from 'react-router-dom';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import { authService } from '~/service/authService';
import './Login.scss';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login authentication with fake data
        if (username === 'admin' && password === 'admin123456') {
            navigate('/');
        } else {
            setErrorMessage('Invalid username or password');
        }
    };
    //Cong add
    const [value, setValue] = useState('');
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            localStorage.setItem('email', data.user.email);
        });
    };
    useEffect(() => {
        setValue(localStorage.getItem('email'));
    });
    //token API
    const navigate = useNavigate();
    const signWithGoogle = async () => {
        const token = await authService.loginWithGoogle();
        console.log('Token:', token);
        const role = localStorage.getItem('student');
        if (role === 'Admin') {
            navigate('./Admin');
        } else {
            console.log('Tôi là user');
        }
    };

    //login form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const loginSchema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        });
        try {
            await loginSchema.validate({ username, password });
            const response = await axios.post('/api/login', { username, password });
            localStorage.setItem('token', response.data.token);
            // Redirect to the authenticated page
            <Link to={config.routes.home}></Link>;
        } catch (error) {
            console.error(error);
            // Display error message to user
        }
    };

    return (
        <div className="Container">
            <div className="logo-game">
                <img src="./images/DOA-3.png" alt="" />
                <div className="logo-game">
                    <div className="auth-form-container">
                        <h2>ĐĂNG NHẬP</h2>
                        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                        <form className="login-form" onSubmit={handleSubmit}>
                            <label>
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="username"
                                    placeholder="TÊN NGƯỜI DÙNG"
                                    id="username"
                                    name="username"
                                />
                            </label>
                            <label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="MẬT KHẨU"
                                    id="password"
                                    name="password"
                                />
                            </label>
                            <button className="btn-icon-arrow" type="submit"></button>
                            <button onClick={signWithGoogle}>
                                <Link className="google-btn" to={config.routes.user}></Link>
                            </button>
                        </form>
                        <button onClick={''}>
                            <Link className="link-btn" to={config.routes.register}>
                                TẠO TÀI KHOẢN
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
