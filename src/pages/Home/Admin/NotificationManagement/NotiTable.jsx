import React from 'react';
import { HorizontalIcon } from '~/components/Layout/components/Icons';
import '../UserAccounts/Table.scss';

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
                            <HorizontalIcon />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default NotiTable;
