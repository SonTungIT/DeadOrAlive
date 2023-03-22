import React, { useState,useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ServerGame.scss';
import ServerTable from './ServerTable';
// import Pagination from './Pagination';
import { Pagination } from '@mui/material';
import LayoutAdmin from '../../../LayoutAdmin';
import productApi from '~/api/productApi';

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

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const productList = await productApi.getAll();
    //         console.log(productList);
    //     };

    //     fetchProducts();
    // }, []);

    var requestOptions = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        redirect: 'follow',
    };

    fetch('https://game-rpg.herokuapp.com/api/v1/gameServer/getAllGameServer?gameName=Dead%20of%20souls', requestOptions)
        .then((response) => {
            if (response.ok) {
                return console.log(response.json());
            }
            throw new Error(response.status);
        })
        .catch((error) => console.log('error', error));

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
