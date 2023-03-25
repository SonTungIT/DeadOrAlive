import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './GameManagement.scss';
import LayoutAdmin from '../LayoutAdmin';
import Button from '~/components/Layout/components/Button';
import { AddIcon } from '~/components/Layout/components/Icons';
import config from '~/config';
import { useNavigate, Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function GameManagement() {
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
                <div>
                    <div className={cx('header')}>
                        <div>Game</div>
                        <Button primary leftIcon={<AddIcon />}>
                            THÊM MỚI
                        </Button>
                    </div>
                    <div clasName={cx('our-games')}>
                        <ul className={cx('our-games_list')}>
                            <li className={cx('our-games__item')}>
                                <div className={cx('game-card')}>
                                    <Button className={cx('game-card__link')} to={config.routes.game1}>
                                        <img
                                            alt="game"
                                            width="600px"
                                            height="220"
                                            src="https://phunugioi.com/wp-content/uploads/2022/07/Hinh-nen-game-1-800x450.jpg"
                                        />
                                    </Button>
                                    {/* <div className={cx('game-card__content')}></div> */}
                                </div>
                            </li>
                            <li className={cx('our-games__item')}>
                                <div className={cx('game-card')}>
                                    <Button className={cx('game-card__link')} to={config.routes.game2}>
                                        <img
                                            alt="game"
                                            width="600px"
                                            height="220"
                                            src="https://thuthuatnhanh.com/wp-content/uploads/2020/09/anh-nen-game-ff-4k-dep.jpg"
                                        />
                                    </Button>
                                    {/* <div className={cx('game-card__content')}></div> */}
                                </div>
                            </li>
                            <li className={cx('our-games__item')}>
                                <div className={cx('game-card')}>
                                    <Button className={cx('game-card__link')} to={config.routes.game3}>
                                        <img
                                            alt="game"
                                            width="600px"
                                            height="220"
                                            src="https://taingay.net/wp-content/uploads/2021/06/12.jpg"
                                        />
                                    </Button>
                                    {/* <div className={cx('game-card__content')}></div> */}
                                </div>
                            </li>
                            <li className={cx('our-games__item')}>
                                <div className={cx('game-card')}>
                                    <Button className={cx('game-card__link')} to={config.routes.game4}>
                                        <img
                                            alt="game"
                                            width="600px"
                                            height="220"
                                            src="https://taingay.net/wp-content/uploads/2021/06/11-1024x576.jpg"
                                        />
                                    </Button>
                                    {/* <div className={cx('game-card__content')}></div> */}
                                </div>
                            </li>
                            <li className={cx('our-games__item')}>
                                <div className={cx('game-card')}>
                                    <Button className={cx('game-card__link')} to={config.routes.game5}>
                                        <img
                                            alt="game"
                                            width="600px"
                                            height="220"
                                            src="https://www.riotgames.com/darkroom/900/d066e7a6446f7f6d512df07e788fbc35:ef7cf9d03d8ab4f103f41188d2c31c0f/tft-card-bg-1800.jpg"
                                        />
                                    </Button>
                                    {/* <div className={cx('game-card__content')}></div> */}
                                </div>
                            </li>
                            <li className={cx('our-games__item')}>
                                <div className={cx('game-card')}>
                                    <Button className={cx('game-card__link')} to={config.routes.game6}>
                                        <img
                                            alt="game"
                                            width="600px"
                                            height="220"
                                            src="https://www.riotgames.com/darkroom/855/eea552a09c8074c6041b970449f529a6:01cd382480eb2f754ed9e93cdeb843db/lol-card-bg-1800.jpg"
                                        />
                                    </Button>
                                    {/* <div className={cx('game-card__content')}></div> */}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </LayoutAdmin>
        </div>
    );
}

export default GameManagement;
