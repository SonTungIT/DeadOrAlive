import React from 'react';
import classNames from 'classnames/bind';
import styles from './GameManagement.scss';
import LayoutAdmin from '../LayoutAdmin';
import Button from '~/components/Layout/components/Button';
import { AddIcon } from '~/components/Layout/components/Icons';

const cx = classNames.bind(styles);

function GameManagement() {
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
                                    <button className={cx('game-card__link')}>
                                        <img
                                            alt
                                            width="600px"
                                            height="220"
                                            src="https://phunugioi.com/wp-content/uploads/2022/07/Hinh-nen-game-1-800x450.jpg"
                                        />
                                    </button>
                                    {/* <div className={cx('game-card__content')}></div> */}
                                </div>
                            </li>
                            <li className={cx('our-games__item')}>
                                <div className={cx('game-card')}>
                                    <button className={cx('game-card__link')}>
                                        <img
                                            alt
                                            width="600px"
                                            height="220"
                                            src="https://thuthuatnhanh.com/wp-content/uploads/2020/09/anh-nen-game-ff-4k-dep.jpg"
                                        />
                                    </button>
                                    {/* <div className={cx('game-card__content')}></div> */}
                                </div>
                            </li>
                            <li className={cx('our-games__item')}>
                                <div className={cx('game-card')}>
                                    <button className={cx('game-card__link')}>
                                        <img
                                            alt
                                            width="600px"
                                            height="220"
                                            src="https://taingay.net/wp-content/uploads/2021/06/12.jpg"
                                        />
                                    </button>
                                    {/* <div className={cx('game-card__content')}></div> */}
                                </div>
                            </li>
                            <li className={cx('our-games__item')}>
                                <div className={cx('game-card')}>
                                    <button className={cx('game-card__link')}>
                                        <img
                                            alt
                                            width="600px"
                                            height="220"
                                            src="https://taingay.net/wp-content/uploads/2021/06/11-1024x576.jpg"
                                        />
                                    </button>
                                    {/* <div className={cx('game-card__content')}></div> */}
                                </div>
                            </li>
                            <li className={cx('our-games__item')}>
                                <div className={cx('game-card')}>
                                    <button className={cx('game-card__link')}>
                                        <img
                                            alt
                                            width="600px"
                                            height="220"
                                            src="https://www.riotgames.com/darkroom/900/d066e7a6446f7f6d512df07e788fbc35:ef7cf9d03d8ab4f103f41188d2c31c0f/tft-card-bg-1800.jpg"
                                        />
                                    </button>
                                    {/* <div className={cx('game-card__content')}></div> */}
                                </div>
                            </li>
                            <li className={cx('our-games__item')}>
                                <div className={cx('game-card')}>
                                    <button className={cx('game-card__link')}>
                                        <img
                                            alt
                                            width="600px"
                                            height="220"
                                            src="https://www.riotgames.com/darkroom/855/eea552a09c8074c6041b970449f529a6:01cd382480eb2f754ed9e93cdeb843db/lol-card-bg-1800.jpg"
                                        />
                                    </button>
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
