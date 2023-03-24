import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './UserAccounts.scss';
import Table from './Table';
// import Pagination from './Pagination';
import { Pagination } from '@mui/material';
import LayoutAdmin from '../LayoutAdmin';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const cx = classNames.bind(styles);

function UserAccounts() {
    const navigate = useNavigate();

    const [data, setData] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/');
            return;
        }

        var requestOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            redirect: 'follow',
        };

        fetch('https://project-game-rpg.herokuapp.com/api/v1/users/listting', requestOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.status);
            })
            .then((result) => {
                setData(result.data);
            })
            .catch((error) => console.log('error', error));
    }, []);

    return (
        <LayoutAdmin>
            <div className={cx('header')}>
                <div>Content</div>
            </div>
            <div className={cx('container')}>
                <Table data={data} />
            </div>
            <div className={cx('footer')}>
                {/* <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
                <Pagination count={10} showFirstButton showLastButton color="primary" />
            </div>
        </LayoutAdmin>
    );
}

export default UserAccounts;
