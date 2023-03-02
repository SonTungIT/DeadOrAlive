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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
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
            await loginSchema.validate({ email, password });
            const response = await axios.post('/api/login', { email, password });
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
                        <form className="login-form" onSubmit={handleFormSubmit}>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="TÊN NGƯỜI DÙNG"
                                id="email"
                                name="email"
                            />
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="MẬT KHẨU"
                                id="password"
                                name="password"
                            />
                            <button className="btn-icon-arrow" type="submit">
                                {/* <Link className="link-btn" to={config.routes.information}></Link> */}
                            </button>
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
