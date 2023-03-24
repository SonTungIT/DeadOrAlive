import React from 'react';
import classNames from 'classnames/bind';
import styles from './UserGame.scss';
import MAP from '~/images/Map.png';
import MAP02 from '~/images/Map-02.png';
import MAP03 from '~/images/Map-03.png';
import POWER01 from '~/images/Power-01.png';
import POWER02 from '~/images/Power-02.png';
import POWER03 from '~/images/Power-03.png';
import Button from '~/components/Layout/components/Button';
import config from '~/config';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function UserGame({ children }) {
    return (
        <div className={cx('update-content')}>
            <div>Chào mừng đến với Dead Or Alive</div>
            <h1 className="headerlearn">HỌC CÁC BƯỚC CƠ BẢN</h1>
            <div>Có rất nhiều thứ cần học hỏi trong DOA. Vì vậy, chúng ta sẽ bắt đầu từ những điều cơ bản.</div>
            <div>Khám phá hứng dẫn dưới đây để biết cách chơi chế độ phổ biến nhất.</div>
            <button className="btn">
                <Link to={config.routes.dow}>CHƠI NGAY</Link>
            </button>
            <h1 className="headerDOA">DEAD OR ALIVE Là gì?</h1>
            <div>Là một tựa game chiến đấu sinh tồn trong đó bạn phải tiêu diệt quái và lụm các vật phẩm giúp bạn thăng cấp.</div>
            <div>Khám phá mọi nơi và hãy tìm hiểu cách thức hoạt động của nó.</div>
            <h1 className="txtmap">MAP</h1>
            <div className="map">
                <img src={MAP} alt="" />
                <img src={MAP02} alt="" />
                <img src={MAP03} alt="" />
            </div>
            <h1 className="txtpower">TĂNG SỨC MẠNH CHO TƯỚNG</h1>
            <div className="power">
                <img src={POWER01} alt="" />
                <img src={POWER02} alt="" />
                <img src={POWER03} alt="" />
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

export default UserGame;
