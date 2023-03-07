import React from 'react';
import classNames from 'classnames/bind';
import styles from './HeaderUser.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import Button from '../Button';
import { ArrowDownIcon } from '../Icons';
import logo from '~/images/DOA-3.png';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'English',
    },
    {
        title: 'Feedback and help',
    },
    {
        title: 'Keyboard shortcuts',
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
                    <Menu items={MENU_ITEMS}>
                        <Button textbox rightIcon={<ArrowDownIcon />}>
                            TIN TỨC
                        </Button>
                    </Menu>

                    <Button textbox>HỖ TRỢ</Button>
                </div>
                <div className={cx('user-footer')}>
                    {/* <img
                        className={cx('user-avatar')}
                        src="https://i.pinimg.com/236x/e1/6c/70/e16c704fc0b655e553dd7a1a8a00475d.jpg"
                        alt="avatar"
                    /> */}
                    <div className={cx('name')}>
                        <span className={cx('user-name')}>Le Son Tung</span>
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
