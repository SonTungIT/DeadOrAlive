import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { HorizontalIcon } from '~/components/Layout/components/Icons';
import './ServerTable.scss';
import Menu from '~/components/Popper/Menu';
import { PencilIcon, DeleteIcon } from '~/components/Layout/components/Icons';

const MENU_ITEMS = [
    {
        icon: <PencilIcon />,
        title: 'Block Server',
    },
    {
        icon: <DeleteIcon />,
        title: 'Delete Server',
    },
];

function ServerTable(props) {
    const [products, setProducts] = useState([]);

    return (
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
                {props.data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.name}</td>
                        <td>{row.createdBy}</td>
                        <td>{row.createdDate}</td>
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

export default ServerTable;
