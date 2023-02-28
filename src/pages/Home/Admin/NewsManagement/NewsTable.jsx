import React from 'react';
import { HorizontalIcon } from '~/components/Layout/components/Icons';
import '../UserAccounts/Table.scss';

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
                            <HorizontalIcon />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default NewsTable;
