import React from 'react';
import classNames from 'classnames/bind';
import styles from './NotificationManagement.scss';
import { Pagination } from '@mui/material';
import LayoutAdmin from '../LayoutAdmin';
import NotiTable from '~/pages/Home/Admin/NotificationManagement/NotiTable';

const cx = classNames.bind(styles);

function NotificationManagement() {
    const data = [
        { id: '1', title: 'Đánh slime', details: 'Tiêu diệt 3 con slime', type: 'kiếm súng', createDate: 'Active' },
    ];

    return (
        <LayoutAdmin>
            <div className={cx('header')}>
                <div>Thông Báo</div>
                <div>Button</div>
            </div>
            <div className={cx('container')}>
                <NotiTable data={data} />
            </div>
            <div className={cx('footer')}>
                {/* <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
                <Pagination count={10} showFirstButton showLastButton color="primary" />
            </div>
        </LayoutAdmin>
    );
}

export default NotificationManagement;
