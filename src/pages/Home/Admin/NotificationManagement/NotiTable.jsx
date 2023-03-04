import React from 'react';
import { HorizontalIcon } from '~/components/Layout/components/Icons';
import '../UserAccounts/Table.scss';
import { MailIcon, PencilIcon, DeleteIcon } from '~/components/Layout/components/Icons';
import Menu from '~/components/Popper/Menu';

const MENU_ITEMS = [
    {
        icon: <MailIcon />,
        title: ' Send Users',
    },
    {
        icon: <PencilIcon />,
        title: 'Edit Notification',
    },
    {
        icon: <DeleteIcon />,
        title: 'Delete Notification',
    },
];

function NotiTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tiêu Đề</th>
                    <th>Mô Tả</th>
                    <th>Loại</th>
                    <th>Ngày Tạo</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.id}</td>
                        <td>{row.title}</td>
                        <td>{row.details}</td>
                        <td>{row.type}</td>
                        <td>{row.createDate}</td>
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

export default NotiTable;
