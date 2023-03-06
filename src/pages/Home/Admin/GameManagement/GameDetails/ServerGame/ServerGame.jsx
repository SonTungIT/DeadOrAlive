import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ServerGame.scss';
import ServerTable from './ServerTable';
// import Pagination from './Pagination';
import { Pagination } from '@mui/material';
import LayoutAdmin from '../../../LayoutAdmin';

const cx = classNames.bind(styles);

function ServerGame() {
    const data = [
        {
            id: 'game 1',
            nameServer: 'Le Son Tung',
            createDate: '6-3-2023',
            updateDate: '6-3-2023',
            status: 'Active',
        },
        {
            id: 'game 2',
            nameServer: 'Le Son Tung',
            createDate: '6-3-2023',
            updateDate: '6-3-2023',
            status: 'Active',
        },
        {
            id: 'game 3',
            nameServer: 'Le Son Tung',
            createDate: '6-3-2023',
            updateDate: '6-3-2023',
            status: 'Active',
        },
    ];

    // const [pagination, setPagination] = useState({
    //     _page: 1,
    //     _limit: 10,
    //     _totalRows: 1,
    // });

    // const [filter, setFilter] = useState({
    //     _limit: 10,
    //     _page: 1,
    // });

    function handlePageChange(newPage) {
        console.log('New page: ', newPage);
    }

    return (
        <LayoutAdmin>
            <div className={cx('header')}>
                <div>QUẢN LÝ SERVER</div>
            </div>
            <div className={cx('container')}>
                <ServerTable data={data} />
            </div>
            <div className={cx('footer')}>
                {/* <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
                <Pagination count={10} showFirstButton showLastButton color="primary" />
            </div>
        </LayoutAdmin>
    );
}

export default ServerGame;
