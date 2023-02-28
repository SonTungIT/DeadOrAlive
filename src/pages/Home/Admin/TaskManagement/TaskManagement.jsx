import React from 'react';
import classNames from 'classnames/bind';
import styles from './TaskManagement.scss';
import { Pagination } from '@mui/material';
import LayoutAdmin from '../LayoutAdmin';
import TaskTable from '~/pages/Home/Admin/TaskManagement/TaskTable';

const cx = classNames.bind(styles);

function TaskManagement() {
    const data = [
        { id: '1', taskName: 'Đánh slime', details: 'Tiêu diệt 3 con slime', reward: 'kiếm súng', status: 'Active' },
        { id: '1', taskName: 'Đánh slime', details: 'Tiêu diệt 3 con slime', reward: 'kiếm súng', status: 'Active' },
        { id: '1', taskName: 'Đánh slime', details: 'Tiêu diệt 3 con slime', reward: 'kiếm súng', status: 'Active' },
        { id: '1', taskName: 'Đánh slime', details: 'Tiêu diệt 3 con slime', reward: 'kiếm súng', status: 'Active' },
        { id: '1', taskName: 'Đánh slime', details: 'Tiêu diệt 3 con slime', reward: 'kiếm súng', status: 'Active' },
        { id: '1', taskName: 'Đánh slime', details: 'Tiêu diệt 3 con slime', reward: 'kiếm súng', status: 'Active' },
        { id: '1', taskName: 'Đánh slime', details: 'Tiêu diệt 3 con slime', reward: 'kiếm súng', status: 'Active' },
        { id: '1', taskName: 'Đánh slime', details: 'Tiêu diệt 3 con slime', reward: 'kiếm súng', status: 'Active' },
        { id: '1', taskName: 'Đánh slime', details: 'Tiêu diệt 3 con slime', reward: 'kiếm súng', status: 'Active' },
    ];

    return (
        <LayoutAdmin>
            <div className={cx('header')}>
                <div>Nhiệm Vụ</div>
                <div>Button</div>
            </div>
            <div className={cx('container')}>
                <TaskTable data={data} />
            </div>
            <div className={cx('footer')}>
                {/* <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
                <Pagination count={10} showFirstButton showLastButton color="primary" />
            </div>
        </LayoutAdmin>
    );
}

export default TaskManagement;
