import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { HorizontalIcon } from '~/components/Layout/components/Icons';
import './ServerTable.scss';
import Menu from '~/components/Popper/Menu';
import { PencilIcon, DeleteIcon } from '~/components/Layout/components/Icons';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '@mui/material';
import classNames from 'classnames/bind';
import styles from './ServerGame.scss';

const MENU_ITEMS = [
    {
        icon: <DeleteIcon />,
        title: 'Delete Server',
    },
];

const cx = classNames.bind(styles);

function ServerTable() {
    const [checkStatus, setcheckStatus] = useState(false);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const navigate = useNavigate();

    function handlePageChange(event, newPage) {
        setCurrentPage(newPage);
    }

    const handleChangeStatus = (status, id) => {
        const handleToggleStatus = (status) => {
            return status === 'DELETED' ? 'ACTIVE' : 'DELETED';
        };

        var raw = JSON.stringify({
            id: id,
            statusName: handleToggleStatus(status),
        });

        var requestOptions = {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: raw,
            redirect: 'follow',
        };

        fetch('https://project-game-rpg.herokuapp.com/api/v1/gameServer/updateStatus', requestOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.status);
            })
            .then((result) => setcheckStatus(!checkStatus))
            .catch((error) => console.log('error', error));
    };

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
    }, [checkStatus]);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Tên máy chủ</th>
                        <th>Chủ Server</th>
                        <th>Ngày tạo</th>
                        <th>Ngày cập nhật</th>
                        <th>Trạng thái</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((row, index) => (
                        <tr key={index}>
                            <td>{row.name}</td>
                            <td>{row.createdBy}</td>
                            <td>{row.createdDate}</td>
                            <td>{row.updateDate}</td>
                            <td>{row.status}</td>
                            <td>
                                <button onClick={() => handleChangeStatus(row.status, row.id)}>
                                    {row.status === 'ACTIVE' ? <DeleteIcon /> : <PencilIcon />}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
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
        </>
    );
}

export default ServerTable;
