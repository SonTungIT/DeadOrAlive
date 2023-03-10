import React from 'react';
import classNames from 'classnames/bind';
import styles from './User.scss';
import HeaderUser from '~/components/Layout/components/HeaderUser/HeaderUser';
import UserLayout from '~/components/Layout/UserLayout';

const cx = classNames.bind(styles);

function User({ children }) {
    return <div className={cx('user-content')}>son tung</div>;
}

export default User;
