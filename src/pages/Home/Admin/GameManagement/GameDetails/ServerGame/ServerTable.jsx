import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { HorizontalIcon } from '~/components/Layout/components/Icons';
import './ServerTable.scss';
import Menu from '~/components/Popper/Menu';
import { PencilIcon, DeleteIcon } from '~/components/Layout/components/Icons';

const MENU_ITEMS = [
    {
        icon: <PencilIcon />,
        title: 'Edit Server',
    },
    {
        icon: <DeleteIcon />,
        title: 'Delete Server',
    },
];

function ServerTable(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            // .get(`https://project-game-rpg.herokuapp.com/api/v1/gameServer/getAllGameServer?gameName=${products}`)
            .get('https://project-game-rpg.herokuapp.com/api/v1/gameServer/getAllGameServer?gameName=Dead%20of%20souls')
            .then((response) => {
                setProducts(response.data);
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên máy chủ</th>
                    <th>Ngày tạo</th>
                    <th>Ngày cập nhật</th>
                    <th>Trạng thái</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.id}</td>
                        <td>{row.nameServer}</td>
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

export default ServerTable;