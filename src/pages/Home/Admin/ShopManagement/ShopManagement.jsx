import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ShopManagement.scss';
import { Pagination } from '@mui/material';
import LayoutAdmin from '../LayoutAdmin';
import Button from '~/components/Layout/components/Button';
import { AddIcon } from '~/components/Layout/components/Icons';
import ShopTable from './ShopTable';
import ShopModal from './ImportModal/ShopModal';

const cx = classNames.bind(styles);

function ShopManagement() {
    const data = [
        {
            id: '1',
            name: 'Kiếm súng',
            image: 'kiemsung.jpg',
            type: 'vũ khí',
            status: 'Active',
        },
        {
            id: '1',
            name: 'Mũ Phù Thủy',
            image: 'muphuthuy.jpg',
            type: 'vũ khí',
            status: 'Active',
        },
        {
            id: '1',
            name: 'Vô Cực Kiếm',
            image: 'vocuckiem.jpg',
            type: 'vũ khí',
            status: 'Active',
        },
    ];

    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <LayoutAdmin>
                <div className={cx('header')}>
                    <div>Vũ Khí</div>
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
                    <ShopTable data={data} />
                </div>
                <div className={cx('footer')}>
                    {/* <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
                    <Pagination count={10} showFirstButton showLastButton color="primary" />
                </div>
            </LayoutAdmin>
            {openModal && <ShopModal closeModal={setOpenModal} />}
        </div>
    );
}

export default ShopManagement;
