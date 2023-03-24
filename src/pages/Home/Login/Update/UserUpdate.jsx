import React from 'react';
import classNames from 'classnames/bind';
import styles from './UserUpdate.scss';
import Button from '~/components/Layout/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

function UserUpdate({ children }) {
    return (
        <div>
            <div className={cx('update-figure')}>
                <h1 className={cx('txt-center')}>Trò chơi của chúng tôi</h1>
                <ul className={cx('our-games_list')}>
                    <li className={cx('our-games__item')}>
                        <div className={cx('game-card')}>
                            <Button className={cx('game-card__link')} to={config.routes.game3}>
                                <img
                                    alt="game"
                                    width="100%"
                                    height="100%"
                                    src="https://www.riotgames.com/darkroom/900/d066e7a6446f7f6d512df07e788fbc35:ef7cf9d03d8ab4f103f41188d2c31c0f/tft-card-bg-1800.jpg"
                                />
                            </Button>
                            <div className={cx('game-card__content')}>Thông tin cập nhật 1.0</div>
                        </div>
                    </li>
                    <li className={cx('our-games__item')}>
                        <div className={cx('game-card')}>
                            <Button className={cx('game-card__link')} to={config.routes.game4}>
                                <img
                                    alt="game"
                                    width="100%"
                                    height="100%"
                                    src="https://www.riotgames.com/darkroom/855/eea552a09c8074c6041b970449f529a6:01cd382480eb2f754ed9e93cdeb843db/lol-card-bg-1800.jpg"
                                />
                            </Button>
                            <div className={cx('game-card__content')}>Thông tin cập nhật 1.0</div>
                        </div>
                    </li>
                    <li className={cx('our-games__item')}>
                        <div className={cx('game-card')}>
                            <Button className={cx('game-card__link')} to={config.routes.game5}>
                                <img
                                    alt="game"
                                    width="100%"
                                    height="100%"
                                    src="https://www.riotgames.com/darkroom/855/eea552a09c8074c6041b970449f529a6:01cd382480eb2f754ed9e93cdeb843db/lol-card-bg-1800.jpg"
                                />
                            </Button>
                            <div className={cx('game-card__content')}>Thông tin cập nhật 1.0</div>
                        </div>
                    </li>
                    <li className={cx('our-games__item')}>
                        <div className={cx('game-card')}>
                            <Button className={cx('game-card__link')} to={config.routes.game6}>
                                <img
                                    alt="game"
                                    width="100%"
                                    height="100%"
                                    src="https://www.riotgames.com/darkroom/900/d066e7a6446f7f6d512df07e788fbc35:ef7cf9d03d8ab4f103f41188d2c31c0f/tft-card-bg-1800.jpg"
                                />
                            </Button>
                            <div className={cx('game-card__content')}>Thông tin cập nhật 1.0</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <div className={cx('update-contact')}>
                    <div className={cx('txtContact')}>ĐIỀU KHOẢN SỬ DỤNG</div>
                    <div className={cx('txtContact')}>CHÍNH SÁCH QUYỀN RIÊNG TƯ</div>
                    <div className={cx('txtContact')}>Copyright @2023 BA Warrior. All right reserved</div>
                </div>
            </div>
        </div>
    )
}

export default UserUpdate;
