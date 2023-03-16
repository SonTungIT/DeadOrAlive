import React from 'react';
import classNames from 'classnames/bind';
import styles from './User.scss';
import HeaderUser from '~/components/Layout/components/HeaderUser/HeaderUser';
import UserLayout from '~/components/Layout/UserLayout';

const cx = classNames.bind(styles);

function User({ children }) {
    return (
        <div className={cx('user-content')}>
            <div className={cx('user-info')}>
                <div className={cx('user-info-left')}>
                    <span className={cx('info-title')}>Thông Tin Cá Nhân</span>
                    <span className={cx('info-content')}>
                        Đây là thông tin riêng tư và sẽ không được chia sẻ với người chơi khác.
                    </span>
                </div>
                <div className={cx('user-info-right')}>
                    <div className={cx('user-info-input')}>
                        <form>
                            <input className={cx('user-input-email')} placeholder="Địa chỉ email"></input>
                            <div className={cx('user-info-details')}>
                                <input className={cx('user-input')} placeholder="phone"></input>
                                <input className={cx('user-input')} placeholder="ngày sinh"></input>
                            </div>
                            <button className={cx('user-savebtn')}>
                                <span>LƯU THAY ĐỔI</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/* đăng nhập tài khoản riots */}
            <div className={cx('user-info')}>
                <div className={cx('user-info-left')}>
                    <span className={cx('info-title')}>Đăng Nhập Tài Khoản DOS</span>
                    <span className={cx('info-content')}>
                        Bạn nên thay đổi mật khẩu định kỳ để giảm thiểu khả năng tài khoản bị truy cập bởi kẻ gian.
                    </span>
                </div>
                <div className={cx('user-info-right')}>
                    <div className={cx('user-info-input')}>
                        <form>
                            <input className={cx('user-input-email')} placeholder="TÊN NGƯỜI DÙNG"></input>
                            <span className={cx('user-changePwd')}>Đổi Mật Khẩu</span>
                            <div className={cx('user-info-details-changePwd')}>
                                <input
                                    className={cx('user-input user-input-acc')}
                                    placeholder="MẬT KHẨU HIỆN TẠI"
                                ></input>
                                <input className={cx('user-input user-input-acc')} placeholder="MẬT KHẨU MỚI"></input>
                                <input
                                    className={cx('user-input user-input-acc')}
                                    placeholder="XÁC NHẬN MẬT KHẨU"
                                ></input>
                            </div>
                            <button className={cx('user-savebtn')}>
                                <span>LƯU THAY ĐỔI</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
