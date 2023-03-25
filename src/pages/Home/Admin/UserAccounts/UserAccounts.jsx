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
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [accessToken, setAccessToken] = useState(localStorage.getItem('token'));

    const fetchData = async () => {
        try {
            const response = await axios.get('https://project-game-rpg.herokuapp.com/api/v1/users/listting', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setData(response.data.data);
        } catch (error) {
            console.log('error', error);
        }
    };

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/');
            return;
        }

        newAccessToken();
        fetchData();
    }, [accessToken]);

    const newAccessToken = () => {
        const intervalId = setInterval(() => {
            const expirationTime = localStorage.getItem('expirationTime');
            const currentTime = Date.now();

            if (expirationTime && currentTime >= expirationTime) {
                clearInterval(intervalId);

                const refreshToken = localStorage.getItem('refreshToken');

                axios
                    .post(
                        'https://project-game-rpg.herokuapp.com/api/v1/auth/accessToken',
                        {
                            refreshToken: refreshToken,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${accessToken}`,
                            },
                        },
                    )
                    .then((response) => {
                        const { accessToken, expiresIn } = response.data;

                        setAccessToken(accessToken);
                        localStorage.setItem('token', accessToken);
                        localStorage.setItem('expirationTime', currentTime + expiresIn * 1000);
                    })
                    .catch((error) => console.log(error));
            }
        }, 1000 * 60);

        return () => clearInterval(intervalId);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <LayoutAdmin>
            <div className={cx('header')}>
                <div>Content</div>
            </div>
            <div className={cx('container')}>
                <Table data={currentItems} />
            </div>
            <div className={cx('footer')}>
                <Pagination
                    count={Math.ceil(data.length / itemsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    showFirstButton
                    showLastButton
                    color="primary"
                />
            </div>
        </LayoutAdmin>
    );
}

export default UserAccounts;
