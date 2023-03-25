import React from 'react';
import classNames from 'classnames/bind';
import styles from './UserDow.scss';

const cx = classNames.bind(styles);

function UserDow({ children }) {
    return (
        <div>
            <div className={cx('dow-content')}>
                <h1 className="heading">Tải Game</h1>
                <div className="headerdow">TẢI BẢN FULL</div>
                <a href="https://drive.google.com/drive/u/1/trash" className="btnDow">
                    Download
                </a>
                <div className="headerdow">Bản cài đặt DOA "Dead or Alive"</div>
                <div className="txt">Kiến nghị:</div>
                <div className="txtdetail">- Tắt Antivirus trước khi chạy file.</div>
                <div className="txt">Ưu điểm:</div>
                <div className="txtdetail">- Tải với tốc độ nhanh và ổn định.</div>
                <div className="txtdetail">- Tích hợp chức năng tải tiếp 'Resume' khi bị mất kết nối mạng.</div>
                <div className="txt">Nhược điểm</div>
                <div className="txtdetail">- Dung lượng game lớn.</div>
            </div>
            <div>
                <div className={cx('dow-contact')}>
                    <div className={cx('txtContact')}>ĐIỀU KHOẢN SỬ DỤNG</div>
                    <div className={cx('txtContact')}>CHÍNH SÁCH QUYỀN RIÊNG TƯ</div>
                    <div className={cx('txtContact')}>Copyright @2023 BA Warrior. All right reserved</div>
                </div>
            </div>
        </div>
    );
}

export default UserDow;
