import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import logo from '~/images/DOA-3.png';
import Button from '../Button';

const cx = classNames.bind(styles);

function Header() {
    const handleLogout = () => {
        localStorage.clear();
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Button to={config.routes.home} className={cx('logo')}>
                    <img alt="Logo" src={logo} />
                </Button>
                <div className={cx('content')}>
                    <img
                        className={cx('user-avatar')}
                        src="https://i.pinimg.com/236x/e1/6c/70/e16c704fc0b655e553dd7a1a8a00475d.jpg"
                        alt="avatar"
                    />
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
