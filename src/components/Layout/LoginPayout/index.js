import classNames from 'classnames/bind';
import HeaderUser from '../components/HeaderLogin/HeaderLogin';
import SidebarUser from '../components/SidebarUser';
// import Footer from '~/components/Layout/components/Footer';
import styles from './LoginLayout.module.scss';

const cx = classNames.bind(styles);

function UserLayout({ children }) {
    return (
        <div className={cx('login-wapper')}>
            <HeaderUser />
            <div className={cx('login-container')}>
                <div className={cx('login-inner')}>
                    <div className={cx('login-content')}>{children}</div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default UserLayout;
