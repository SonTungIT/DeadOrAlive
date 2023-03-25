import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './FirstGame.scss';
import LayoutAdmin from '../../LayoutAdmin';
import Button from '~/components/Layout/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

function FirstGame() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/');
            return;
        }
    }, []);

    return (
        <div>
            <LayoutAdmin>
                {/* <div className={cx('header')}>
                    <div>First Game</div>
                </div> */}
                <div className={cx('container')}>
                    <div className={cx('title')}>Dead Of Souls</div>
                    <div className={cx('body')}>
                        <form>
                            <div className={cx('form-body')}>
                                <div className={cx('upload-body')}>
                                    <img
                                        className={cx('user-avatar')}
                                        src="https://phunugioi.com/wp-content/uploads/2022/07/Hinh-nen-game-1-800x450.jpg"
                                        alt="avatar"
                                    />
                                    <Button rounded>Upload Image</Button>
                                </div>
                                <div>
                                    <div>
                                        <input className={cx('input-body')} type="text" />
                                        <span>ID</span>
                                    </div>
                                    <div>
                                        <input className={cx('input-body')} type="text" />
                                        <span>NAME</span>
                                    </div>
                                    <div>
                                        <input className={cx('input-body')} type="text" />
                                        <span>STATUS</span>
                                    </div>
                                    <div>
                                        <input className={cx('input-body')} type="text" />
                                        <span>CREATE AT</span>
                                    </div>
                                    <div>
                                        <input className={cx('input-body')} type="text" />
                                        <span>UPDATE AT</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('btn-body')}>
                                <Button type="submit" rounded>
                                    Save
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={cx('footer-game')}>
                    <Button to={config.routes.serverGame} large>
                        QUẢN LÝ SERVER
                    </Button>
                </div>
            </LayoutAdmin>
        </div>
    );
}

export default FirstGame;
