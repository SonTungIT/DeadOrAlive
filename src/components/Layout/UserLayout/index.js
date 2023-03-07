import classNames from 'classnames/bind';
import HeaderUser from '../components/HeaderUser/HeaderUser';
// import Sidebar from '~/components/Layout/components/Sidebar';
// import Footer from '~/components/Layout/components/Footer';
import styles from './UserLayout.module.scss';

const cx = classNames.bind(styles);

function UserLayout({ children }) {
    return (
        <div className={cx('user-wapper')}>
            <HeaderUser />
            {/* <div className={cx('user-container')}>
                <Sidebar />
                <div className={cx('user-content')}>{children}</div>
            </div>
            <Footer /> */}
        </div>
    );
}

export default UserLayout;
