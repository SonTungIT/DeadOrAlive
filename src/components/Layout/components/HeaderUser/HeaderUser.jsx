import React from 'react';
import classNames from 'classnames/bind';
import styles from './HeaderUser.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import Button from '../Button';
import { ArrowDownIcon, LanguageIcon } from '../Icons';
import logo from '~/images/DOA-3.png';
import MenuUser from '~/components/PopperUser/MenuUser';
import axios from 'axios';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'Tất Cả',
    },
    {
        title: 'Cập Nhật Trò Chơi',
    },
    {
        title: 'Esports',
    },
];

const MENU_ACCOUNTS = [
    {
        title: 'Tải Trò Chơi',
    },
    {
        title: 'Cài Đặt',
    },
    {
        title: 'Đăng Xuất',
    },
];

function HeaderUser() {
    return (
        <header className={cx('user-wrapper')}>
            <div className={cx('user-inner')}>
                <Button to={config.routes.home} className={cx('logo')}>
                    <img alt="Logo" src={logo} />
                </Button>
                <div className={cx('user-content')}>
                    <MenuUser items={MENU_ITEMS}>
                        <div>
                            <Button textbox rightIcon={<ArrowDownIcon />}>
                                <span>TIN TỨC</span>
                            </Button>
                        </div>
                    </MenuUser>

                    <Button textbox>HỖ TRỢ</Button>
                </div>
                <div className={cx('user-footer')}>
                    <img
                        className={cx('user-avatar')}
                        src="https://i.pinimg.com/236x/e1/6c/70/e16c704fc0b655e553dd7a1a8a00475d.jpg"
                        alt="avatar"
                    />
                    <div className={cx('name')}>
                        <Button className={cx('icon-name')}>
                            <LanguageIcon />
                        </Button>
                        <MenuUser items={MENU_ACCOUNTS}>
                            <div>
                                <Button accountName rightIcon={<ArrowDownIcon />}>
                                    <span className={cx('user-name')}>Anh Trường Faker</span>
                                </Button>
                            </div>
                        </MenuUser>
                        {/* <Link className={cx('logout')} to={config.routes.login}>
                            Log out
                        </Link> */}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderUser;
