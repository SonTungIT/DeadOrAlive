import React from 'react';
import classNames from 'classnames/bind';
import styles from './User.scss';
import HeaderUser from '~/components/Layout/components/HeaderUser/HeaderUser';
import UserLayout from '~/components/Layout/UserLayout';

const cx = classNames.bind(styles);

function User({ children }) {
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
                        <input placeholder="Địa chỉ email"></input>
                        <div className={cx('user-info-details')}>
                            <input placeholder="phone"></input>
                            <input placeholder="ngày sinh"></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
