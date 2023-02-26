import React from 'react';
import classNames from 'classnames/bind';
import styles from './UserAccounts.scss';
import Table from './Table';

const cx = classNames.bind(styles);

function UserAccounts() {
    const data = [
        { userName: 'tung@gmail.com', fullName: 'Le Son Tung', avatar: 'tung.jpg', status: 'true' },
        { userName: 'trung@gmail.com', fullName: 'Nguyen Thanh Trung', avatar: 'trung.jpg', status: 'true' },
        { userName: 'van@gmail.com', fullName: 'Pham Quang Van', avatar: 'van.jpg', status: 'true' },
        { userName: 'danh@gmail.com', fullName: 'Bui Cong Danh', avatar: 'danh.jpg', status: 'true' },
        { userName: 'cong@gmail.com', fullName: 'Tran Chi Cong', avatar: 'cong.jpg', status: 'true' },
        { userName: 'cong@gmail.com', fullName: 'Tran Chi Cong', avatar: 'cong.jpg', status: 'true' },
        { userName: 'cong@gmail.com', fullName: 'Tran Chi Cong', avatar: 'cong.jpg', status: 'true' },
        { userName: 'cong@gmail.com', fullName: 'Tran Chi Cong', avatar: 'cong.jpg', status: 'true' },
        { userName: 'cong@gmail.com', fullName: 'Tran Chi Cong', avatar: 'cong.jpg', status: 'true' },
    ];

    return (
        <div className={cx('content')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <div>Content</div>
                    <div>Button</div>
                </div>
                <div className={cx('container')}>
                    <Table data={data} />
                </div>
                <div className={cx('footer')}>4</div>
            </div>
        </div>
    );
}

export default UserAccounts;
