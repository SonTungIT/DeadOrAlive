import classNames from 'classnames/bind';
import HeaderUser from '../components/HeaderUser/HeaderUser';
import SidebarUser from '../components/SidebarUser';
// import Footer from '~/components/Layout/components/Footer';
import styles from './UserLayout.module.scss';

const cx = classNames.bind(styles);

function UserLayout({ children }) {
    return (
        <div className={cx('user-wapper')}>
            <HeaderUser />
            <div className={cx('user-container')}>
                <div className={cx('user-inner')}>
                    <SidebarUser />
                    {/* <div className={cx('user-content')}>{children}</div> */}
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default UserLayout;
