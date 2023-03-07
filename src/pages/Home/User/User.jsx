import React from 'react';
import classNames from 'classnames/bind';
import styles from './User.scss';

const cx = classNames.bind(styles);

function User() {
    return (
        <div className={cx('doa-game')}>
            <div className={cx('doa-header')}>
                <div className={cx('doa-left-content')}>
                    <div className={cx('doa-branding-switcher')}></div>
                </div>
                <div className={cx('doa-center-content')}></div>
                <div className={cx('doa-right-content')}></div>
            </div>
            <div className={cx('doa-body')}>
                <div className={cx('doa-container')}></div>
            </div>
            <div className={cx('doa-footer')}></div>
        </div>
    );
}

export default User;
