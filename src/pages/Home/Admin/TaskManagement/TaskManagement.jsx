import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './TaskManagement.scss';
import { Pagination } from '@mui/material';
import LayoutAdmin from '../LayoutAdmin';
import TaskTable from '~/pages/Home/Admin/TaskManagement/TaskTable';
import Button from '~/components/Layout/components/Button';
import { AddIcon } from '~/components/Layout/components/Icons';
import ImportModal from './ImportModal/ImportModal';

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

    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <LayoutAdmin>
                <div className={cx('header')}>
                    <div>Nhiệm Vụ</div>
                    <Button
                        primary
                        leftIcon={<AddIcon />}
                        onClick={() => {
                            setOpenModal(true);
                        }}
                    >
                        THÊM MỚI
                    </Button>
                </div>
                <div className={cx('container')}>
                    <TaskTable data={data} />
                </div>
                <div className={cx('footer')}>
                    {/* <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
                    <Pagination count={10} showFirstButton showLastButton color="primary" />
                </div>
            </LayoutAdmin>
            {openModal && <ImportModal closeModal={setOpenModal} />}
        </div>
    );
}

export default TaskManagement;
