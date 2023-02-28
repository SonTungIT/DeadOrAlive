import React from 'react';
import classNames from 'classnames/bind';
import styles from './NewsManagement.scss';
import { Pagination } from '@mui/material';
import LayoutAdmin from '../LayoutAdmin';
import NewsTable from '~/pages/Home/Admin/NewsManagement/NewsTable';

const cx = classNames.bind(styles);

function NewsManagement() {
    const data = [
        {
            id: '1',
            title: 'loa loa loa mất 1 cái loa',
            createDate: '1-3-2023',
            updateDate: '2-3-2023',
            status: 'Active',
        },
        {
            id: '1',
            title: 'loa loa loa mất 1 cái loa',
            createDate: '1-3-2023',
            updateDate: '2-3-2023',
            status: 'Active',
        },
        {
            id: '1',
            title: 'loa loa loa mất 1 cái loa',
            createDate: '1-3-2023',
            updateDate: '2-3-2023',
            status: 'Active',
        },
    ];

    return (
        <LayoutAdmin>
            <div className={cx('header')}>
                <div>Nhiệm Vụ</div>
                <div>Button</div>
            </div>
            <div className={cx('container')}>
                <NewsTable data={data} />
            </div>
            <div className={cx('footer')}>
                {/* <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
                <Pagination count={10} showFirstButton showLastButton color="primary" />
            </div>
        </LayoutAdmin>
    );
}

export default NewsManagement;
