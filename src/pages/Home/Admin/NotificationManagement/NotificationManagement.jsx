import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './NotificationManagement.scss';
import { Pagination } from '@mui/material';
import LayoutAdmin from '../LayoutAdmin';
import NotiTable from '~/pages/Home/Admin/NotificationManagement/NotiTable';
import Button from '~/components/Layout/components/Button';
import { AddIcon } from '~/components/Layout/components/Icons';
import NotiModal from './ImportModal/NotiModal';

const cx = classNames.bind(styles);

function NotificationManagement() {
    const data = [
        { id: '1', title: 'Đánh slime', details: 'Tiêu diệt 3 con slime', type: 'kiếm súng', createDate: 'Active' },
        { id: '1', title: 'Đánh slime', details: 'Tiêu diệt 3 con slime', type: 'kiếm súng', createDate: 'Active' },
    ];

    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <LayoutAdmin>
                <div className={cx('header')}>
                    <div>Thông Báo</div>
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
                    <NotiTable data={data} />
                </div>
                <div className={cx('footer')}>
                    {/* <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
                    <Pagination count={10} showFirstButton showLastButton color="primary" />
                </div>
            </LayoutAdmin>
            {openModal && <NotiModal closeModal={setOpenModal} />}
        </div>
    );
}

export default NotificationManagement;
