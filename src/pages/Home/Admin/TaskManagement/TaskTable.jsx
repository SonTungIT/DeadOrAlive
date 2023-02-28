import React from 'react';
import { HorizontalIcon } from '~/components/Layout/components/Icons';
import '../UserAccounts/Table.scss';

function TaskTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên Nhiệm Vụ</th>
                    <th>Mô Tả</th>
                    <th>Phần Thưởng</th>
                    <th>Trạng Thái</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.id}</td>
                        <td>{row.taskName}</td>
                        <td>{row.details}</td>
                        <td>{row.reward}</td>
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

export default TaskTable;
