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

function ShopTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên Items</th>
                    <th>Images</th>
                    <th>Loại</th>
                    <th>Trạng Thái</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.image}</td>
                        <td>{row.type}</td>
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

export default ShopTable;
