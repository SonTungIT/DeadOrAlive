import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './NewsManagement.scss';
import { Pagination } from '@mui/material';
import LayoutAdmin from '../LayoutAdmin';
import NewsTable from '~/pages/Home/Admin/NewsManagement/NewsTable';
import Button from '~/components/Layout/components/Button';
import { AddIcon } from '~/components/Layout/components/Icons';
import NewsModal from './ImportModal/NewsModal';

const cx = classNames.bind(styles);

function NewsManagement() {
    const data = [
        {
            id: '1',
            title: 'loa loa loa mất 1 cái loa',
            createDate: '1-3-2023',
            updateDate: '2-3-2023',
            status: 'Active',
        },
        {
            id: '1',
            title: 'loa loa loa mất 1 cái loa',
            createDate: '1-3-2023',
            updateDate: '2-3-2023',
            status: 'Active',
        },
        {
            id: '1',
            title: 'loa loa loa mất 1 cái loa',
            createDate: '1-3-2023',
            updateDate: '2-3-2023',
            status: 'Active',
        },
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
                    <NewsTable data={data} />
                </div>
                <div className={cx('footer')}>
                    {/* <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
                    <Pagination count={10} showFirstButton showLastButton color="primary" />
                </div>
            </LayoutAdmin>
            {openModal && <NewsModal closeModal={setOpenModal} />}
        </div>
    );
}

export default NewsManagement;
