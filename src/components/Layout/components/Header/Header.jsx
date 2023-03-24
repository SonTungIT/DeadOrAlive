import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import logo from '~/images/DOA-3.png';
import Button from '../Button';
import MenuUser from '~/components/PopperUser/MenuUser';

const cx = classNames.bind(styles);

const MENU_ACCOUNTS = [
    {
        title: 'Tải Trò Chơi',
    }
];

function Header() {
    const handleLogout = () => {
        localStorage.clear();
    };

    const [avatar, setAvatar] = useState()

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Button to={config.routes.home} className={cx('logo')}>
                    <img alt="Logo" src={logo} />
                </Button>
                <div className={cx('content')}>
                    
                    <MenuUser items={MENU_ACCOUNTS}>
                        <div>
                            <button className={cx('btn-user-avatar')} type="file" onChange={handlePreviewAvatar}>
                                <img
                                    className={cx('user-avatar')}
                                    src="https://i.pinimg.com/236x/e1/6c/70/e16c704fc0b655e553dd7a1a8a00475d.jpg"
                                    alt="avatar"
                                />
                                    
                                    {avatar && (
                                        <input type="file" onChange={handlePreviewAvatar}/>,
                                        <img className={cx('user-avatar')} src={avatar.preview} alt=""/>
                                    )}
                            </button>
                        </div>
                    </MenuUser>
                    <div className={cx('name')}>
                        <span className={cx('user-name')}>Le Son Tung</span>
                        <Link onClick={handleLogout} className={cx('logout')} to={config.routes.home}>
                            Log out
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
