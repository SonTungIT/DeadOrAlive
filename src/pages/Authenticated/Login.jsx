import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import config from '~/config';
import { useNavigate, Link } from 'react-router-dom';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import { authService } from '~/service/authService';
import './Login.scss';
import { ClipLoader } from 'react-spinners';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

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
        try {
            const response = await axios.post('https://project-game-rpg.herokuapp.com/api/v1/auth/login', {
                username,
                password,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            localStorage.setItem('token', response.data.data.accessToken);
            localStorage.setItem('refreshToken', response.data.data.refreshToken);
            // Redirect to the authenticated page
            if (response.status === 202) {
                var myHeaders = new Headers();
                myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    redirect: 'follow',
                };

                fetch('https://project-game-rpg.herokuapp.com/api/v1/auth/validation', requestOptions)
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        }
                        throw new Error(response.status);
                    })
                    .then((result) => {
                        console.log('result', result);
                        localStorage.setItem('role', result.data.role.name);
                        localStorage.setItem('userName', result.data.lastName + ' ' + result.data.firstName);
                        console.log('localStorage ', localStorage.getItem('role'));
                        if (localStorage.getItem('role') === 'ADMIN') {
                            navigate('/user_management');
                        } else {
                            navigate('/user');
                        }
                    })
                    .catch((error) => console.log('error', error));
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <div className="Container">
            {/* <div class="loader"></div> */}
            <div className="logo-game">
                <img src="./images/DOA-3.png" alt="" />
                <div className="logo-game">
                    <div className="auth-form-container">
                        <h2>ĐĂNG NHẬP</h2>
                        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                        <form className="login-form" onSubmit={handleFormSubmit}>
                            <label>
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="text"
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
                            <button
                                className="btn-icon-arrow"
                                type="submit"
                                onClick={() => {
                                    setLoading(true);
                                    setTimeout(() => {
                                        setLoading(false);
                                    }, 5000);
                                }}
                            >
                                {loading ? (
                                    <ClipLoader
                                        className="loading-animation"
                                        color={'#be29cc'}
                                        loading={loading}
                                        size={50}
                                    />
                                ) : (
                                    ''
                                )}
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
