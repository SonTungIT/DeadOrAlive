import React from 'react';
import classNames from 'classnames/bind';
import styles from './HeaderLogin.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import Button from '../Button';
import { ArrowDownIcon, LanguageIcon } from '../Icons';
import logo from '~/images/DOA-3.png';
import MenuUser from '~/components/PopperUser/MenuUser';
import { useScrollY } from '~/pages/hooks/useScrollY';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'Tất Cả',
    },
    {
        title: 'Cập Nhật Trò Chơi',
        to: config.routes.update,
    },
    {
        title: 'Esports',
    },
];

// const MENU_ACCOUNTS = [
//     {
//         title: 'Tải Trò Chơi',
//     },
//     {
//         title: 'Cài Đặt',
//     },
//     {
//         title: 'Đăng Xuất',
//     },
// ];

function HeaderLogin() {
    const [scrollY] = useScrollY();
    return (
        <header className={cx('login-wrapper')} style={scrollY < 50 ? {backgroundColor: 'transparent'}:{backgroundColor: '#222'}}>
            <div className={cx('login-inner')}>
                <Button to={config.routes.home} className={cx('logo')}>
                    <img alt="Logo" src={logo} />
                </Button>
                <div className={cx('login-content')}>
                    <MenuUser items={MENU_ITEMS}>
                        <div>
                            <Button textbox rightIcon={<ArrowDownIcon />}>
                                <span>TIN TỨC</span>
                            </Button>
                        </div>
                    </MenuUser>
                    <Button textbox>
                        <Link to={config.routes.game}>TRÒ CHƠI</Link>
                    </Button>
                    <Button textbox>
                        <Link to={config.routes.dow}>TẢI GAME</Link>
                    </Button>
                    <Button textbox>HỖ TRỢ</Button>
                </div>
                <div className={cx('login-footer')}>
                    <div className={cx('name')}>
                        <Button className={cx('icon-name')}>
                            <LanguageIcon />
                        </Button>
                        <div>
                            <Button accountName>
                                <Link to={config.routes.login} className={cx('login-name')}>Login</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderLogin;
