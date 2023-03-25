import React from 'react';
import classNames from 'classnames/bind';
import styles from './UserLogin.scss';
import Button from '~/components/Layout/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

function UserLogin({ children }) {
    return (
        <div>
            <div className={cx('login-content')}>
                <img
                    className={cx('login-img')}
                    src="https://www.riotgames.com/darkroom/500/46d557221573d80265caeb4691995888:443d27b048e56f64ebc65917628b6077/mageseeker-preorder-riothome-logo.png"
                ></img>
            </div>
            <div className={cx('login-detail')}>
                <h1 className={cx('txt-center')}>Chuyện gì đang xảy ra vậy?</h1>
                <ul className={cx('our-games_list')}>
                    <li className={cx('our-games__item')}>
                        <div className={cx('game-card')}>
                            <Button className={cx('game-card__link')} to={config.routes.home}>
                                <img
                                    alt="game"
                                    width="100%"
                                    height="100%"
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
                                    width="100%"
                                    height="100%"
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
                                    height="200"
                                    //src="https://taingay.net/wp-content/uploads/2021/06/12.jpg"
                                    src="https://www.riotgames.com/darkroom/900/d066e7a6446f7f6d512df07e788fbc35:ef7cf9d03d8ab4f103f41188d2c31c0f/tft-card-bg-1800.jpg"
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
                                    height="200"
                                    //src="https://taingay.net/wp-content/uploads/2021/06/11-1024x576.jpg"
                                    src="https://www.riotgames.com/darkroom/855/eea552a09c8074c6041b970449f529a6:01cd382480eb2f754ed9e93cdeb843db/lol-card-bg-1800.jpg"
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
                                    height="200"
                                    // src="https://www.riotgames.com/darkroom/900/d066e7a6446f7f6d512df07e788fbc35:ef7cf9d03d8ab4f103f41188d2c31c0f/tft-card-bg-1800.jpg"
                                    src="https://www.riotgames.com/darkroom/855/eea552a09c8074c6041b970449f529a6:01cd382480eb2f754ed9e93cdeb843db/lol-card-bg-1800.jpg"
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
                                    height="200"
                                    // src="https://www.riotgames.com/darkroom/855/eea552a09c8074c6041b970449f529a6:01cd382480eb2f754ed9e93cdeb843db/lol-card-bg-1800.jpg"
                                    src="https://www.riotgames.com/darkroom/900/d066e7a6446f7f6d512df07e788fbc35:ef7cf9d03d8ab4f103f41188d2c31c0f/tft-card-bg-1800.jpg"
                                />
                            </Button>
                            {/* <div className={cx('game-card__content')}></div> */}
                        </div>
                    </li>
                </ul>
            </div>
            <div className={cx('login-figure')}>
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
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <div className={cx('login-contact')}>
                    <div className={cx('txtContact')}>ĐIỀU KHOẢN SỬ DỤNG</div>
                    <div className={cx('txtContact')}>CHÍNH SÁCH QUYỀN RIÊNG TƯ</div>
                    <div className={cx('txtContact')}>Copyright @2023 BA Warrior. All right reserved</div>
                </div>
            </div>
        </div>
    );
}

export default UserLogin;
