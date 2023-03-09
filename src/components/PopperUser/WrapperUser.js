import classNames from 'classnames/bind';
import styles from './PopperUser.module.scss';

const cx = classNames.bind(styles);

function WrapperUser({ children, className }) {
    return <div className={cx('wrapperUser', className)}>{children}</div>;
}

export default WrapperUser;
