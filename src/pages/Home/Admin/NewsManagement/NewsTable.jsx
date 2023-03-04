import React from 'react';
import { HorizontalIcon } from '~/components/Layout/components/Icons';
import '../UserAccounts/Table.scss';
import { PencilIcon, DeleteIcon } from '~/components/Layout/components/Icons';
import Menu from '~/components/Popper/Menu';
import config from '~/config';

const MENU_ITEMS = [
    {
        icon: <PencilIcon />,
        title: 'Edit News',
        to: config.routes.editNews,
    },
    {
        icon: <DeleteIcon />,
        title: 'Delete News',
    },
];

function NewsTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tiêu Đề</th>
                    <th>Ngày Tạo</th>
                    <th>Ngày Cập Nhật</th>
                    <th>Trạng Thái</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.id}</td>
                        <td>{row.title}</td>
                        <td>{row.createDate}</td>
                        <td>{row.updateDate}</td>
                        <td>{row.status}</td>
                        <td>
                            <Menu items={MENU_ITEMS}>
                                <button>
                                    <HorizontalIcon />
                                </button>
                            </Menu>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default NewsTable;
