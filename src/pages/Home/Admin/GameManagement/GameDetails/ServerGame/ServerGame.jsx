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
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                if (!localStorage.getItem('token')) {
                    navigate('/');
                    return;
                }

                const requestOptions = {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json',
                    },
                    redirect: 'follow',
                };

                const response = await fetch(
                    'https://project-game-rpg.herokuapp.com/api/v1/gameServer/getAllGameServer?gameName=Dead%20of%20souls',
                    requestOptions,
                );
                if (response.ok) {
                    const result = await response.json();
                    console.log(result);
                    return result;
                }
                throw new Error(response.status);
            } catch (error) {
                console.log('error', error);
                return error;
            }
        };

        getData()
            .then((result) => setData(result.data))
            .catch((error) => console.log(error));
    }, []);

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
