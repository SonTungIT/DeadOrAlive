import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img alt="Logo" />
                <div className={cx('content')}>
                    <img
                        className={cx('user-avatar')}
                        src="https://i.pinimg.com/236x/e1/6c/70/e16c704fc0b655e553dd7a1a8a00475d.jpg"
                        alt="avatar"
                    />
                    <div className={cx('name')}>
                        <span className={cx('user-name')}>Le Son Tung</span>
                        <Link className={cx('logout')} to={config.routes.login}>
                            Log out
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
