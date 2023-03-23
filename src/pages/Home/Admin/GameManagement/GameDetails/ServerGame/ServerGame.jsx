import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ServerGame.scss';
import ServerTable from './ServerTable';
// import Pagination from './Pagination';
import { Pagination } from '@mui/material';
import LayoutAdmin from '../../../LayoutAdmin';
import productApi from '~/api/productApi';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function ServerGame() {
    function handlePageChange(newPage) {
        console.log('New page: ', newPage);
    }

    return (
        <LayoutAdmin>
            <div className={cx('header')}>
                <div>QUẢN LÝ SERVER</div>
            </div>
            <div className={cx('container')}>
                <ServerTable />
            </div>
            <div className={cx('footer')}>
                {/* <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
                <Pagination count={10} showFirstButton showLastButton color="primary" />
            </div>
        </LayoutAdmin>
    );
}

export default ServerGame;
