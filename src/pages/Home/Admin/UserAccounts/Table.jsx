import React from 'react';
import { HorizontalIcon } from '~/components/Layout/components/Icons';
import './Table.scss';

function Table(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>Full Name</th>
                    <th>Avatar</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.userName}</td>
                        <td>{row.fullName}</td>
                        <td>{row.avatar}</td>
                        <td>{row.status}</td>
                        <td>
                            <HorizontalIcon />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
