import React from 'react';
import { HorizontalIcon } from '~/components/Layout/components/Icons';
import './Table.scss';
import Menu from '~/components/Popper/Menu';
import { VisibilityIcon, VisibilityOffIcon, CancelIcon, DeleteIcon } from '~/components/Layout/components/Icons';

const MENU_ITEMS = [
    {
        icon: <VisibilityIcon />,
        title: 'Active User',
    },
    {
        icon: <VisibilityOffIcon />,
        title: 'Inactive User',
    },
    {
        icon: <CancelIcon />,
        title: 'Block User',
    },
    {
        icon: <DeleteIcon />,
        title: 'Delete User',
    },
];

function Table(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.username}</td>
                        <td>{row.firstName + ' ' + row.lastName}</td>
                        <td>{row.email}</td>
                        <td>{row.phone}</td>
                        <td>{row.role.name}</td>
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

export default Table;
