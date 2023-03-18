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

    // const data = [
    //     { userName: 'tung@gmail.com', fullName: 'Le Son Tung', avatar: 'tung.jpg', status: 'Active' },
    //     { userName: 'trung@gmail.com', fullName: 'Nguyen Thanh Trung', avatar: 'trung.jpg', status: 'Active' },
    //     { userName: 'van@gmail.com', fullName: 'Pham Quang Van', avatar: 'van.jpg', status: 'Active' },
    //     { userName: 'danh@gmail.com', fullName: 'Bui Cong Danh', avatar: 'danh.jpg', status: 'Active' },
    //     { userName: 'cong@gmail.com', fullName: 'Tran Chi Cong', avatar: 'cong.jpg', status: 'Active' },
    //     { userName: 'cong@gmail.com', fullName: 'Tran Chi Cong', avatar: 'cong.jpg', status: 'Active' },
    //     { userName: 'cong@gmail.com', fullName: 'Tran Chi Cong', avatar: 'cong.jpg', status: 'Active' },
    //     { userName: 'cong@gmail.com', fullName: 'Tran Chi Cong', avatar: 'cong.jpg', status: 'Active' },
    //     { userName: 'cong@gmail.com', fullName: 'Tran Chi Cong', avatar: 'cong.jpg', status: 'Active' },
    // ];

    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);

    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    myHeaders.append('Cookie', 'JSESSIONID=D20497195C8F330A5CB7350A08C43C0B');

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
    };

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

    console.log('localStorage.getItem', localStorage.getItem('role'));
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/');
            return;
        }
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
