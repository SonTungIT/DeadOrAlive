import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './User.scss';
import HeaderUser from '~/components/Layout/components/HeaderUser/HeaderUser';
import UserLayout from '~/components/Layout/UserLayout';
import { useNavigate, Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function User({ children }) {
    const navigate = useNavigate();
    const [data, setData] = useState({ email: '', phone: '', firstName: '', lastName: '' });

    const handleUpdateData = (e) => {
        e.preventDefault();
        console.log(data);

        var raw = JSON.stringify({
            firstname: data.firstName,
            lastname: data.lastName,
            email: data.email,
            phone: data.phone,
        });

        var requestOptions = {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: raw,
            redirect: 'follow',
        };

        fetch('https://project-game-rpg.herokuapp.com/api/v1/users/update', requestOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.status);
            })
            .then((result) => console.log(result))
            .catch((error) => console.log('error', error));
    };

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/');
            return;
        }

        var requestOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
        };

        fetch('https://project-game-rpg.herokuapp.com/api/v1/users/profile', requestOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.status);
            })
            .then((result) => {
                setData(result.data);
            })
            .catch((error) => console.log('error', error));
    }, [navigate]);

    const handleCopy = () => {
        const tokenInput = document.getElementById('token-input');
        tokenInput.select();
        document.execCommand('copy');
    };

    return (
        <div className={cx('user-content')}>
            <div className={cx('user-info')}>
                <div className={cx('user-info-left')}>
                    <span className={cx('info-title')}>Thông Tin Cá Nhân</span>
                    <span className={cx('info-content')}>
                        Đây là thông tin riêng tư và sẽ không được chia sẻ với người chơi khác.
                    </span>
                </div>
                <div className={cx('user-info-right')}>
                    <div className={cx('user-info-input')}>
                        <form onSubmit={handleUpdateData}>
                            <label htmlFor="">Email :</label>
                            <input
                                className={cx('user-input-email')}
                                placeholder="Địa chỉ email"
                                value={data.email}
                                name="email"
                                type="email"
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                            ></input>
                            <label htmlFor="">Phone :</label>
                            <input
                                className={cx('user-input-email')}
                                placeholder="Phone"
                                value={data.phone}
                                name="phone"
                                type="number"
                                onChange={(e) => setData({ ...data, phone: e.target.value })}
                            ></input>
                            <label htmlFor="">Họ và Tên :</label>
                            <div className={cx('user-info-details')}>
                                <input
                                    className={cx('user-input')}
                                    placeholder="Tên"
                                    value={data.lastName}
                                    onChange={(e) => setData({ ...data, lastName: e.target.value })}
                                ></input>
                                <input
                                    className={cx('user-input')}
                                    placeholder="Họ"
                                    value={data.firstName}
                                    onChange={(e) => setData({ ...data, firstName: e.target.value })}
                                ></input>
                            </div>
                            <button type="submit" className={cx('user-savebtn')}>
                                <span>LƯU THAY ĐỔI</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/* đăng nhập tài khoản */}
            <div className={cx('user-info')}>
                <div className={cx('user-info-left')}>
                    <span className={cx('info-title')}>Đăng Nhập Tài Khoản DOS</span>
                    <span className={cx('info-content')}>
                        Bạn nên thay đổi mật khẩu định kỳ để giảm thiểu khả năng tài khoản bị truy cập bởi kẻ gian.
                    </span>
                </div>
                <div className={cx('user-info-right')}>
                    <div className={cx('user-info-input')}>
                        <form>
                            <span className={cx('user-changePwd')}>Đổi Mật Khẩu</span>
                            <div className={cx('user-info-details-changePwd')}>
                                <input
                                    className={cx('user-input user-input-acc')}
                                    placeholder="MẬT KHẨU HIỆN TẠI"
                                    value="***********"
                                ></input>
                                <input className={cx('user-input user-input-acc')} placeholder="MẬT KHẨU MỚI"></input>
                                <input
                                    className={cx('user-input user-input-acc')}
                                    placeholder="XÁC NHẬN MẬT KHẨU"
                                ></input>
                            </div>
                            <button className={cx('user-savebtn')}>
                                <span>LƯU THAY ĐỔI</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/* token */}
            <div className={cx('user-info')}>
                <div className={cx('user-info-left')}>
                    <span className={cx('info-title')}>Access Token</span>
                </div>
                <div className={cx('token-right')}>
                    <div className={cx('user-info-input')}>
                        <div className={cx('token-changePwd')}>
                            <input
                                className={cx('user-input user-input-acc')}
                                placeholder="AccessToken"
                                value={localStorage.getItem('token')}
                                id="token-input"
                            ></input>
                            <button className={cx('btn-copy')} onClick={handleCopy}>
                                Copy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
