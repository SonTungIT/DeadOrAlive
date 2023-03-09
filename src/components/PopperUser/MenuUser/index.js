import classNames from 'classnames/bind';
import styles from './MenuUser.module.scss';
import { WrapperUser as PopperWrapper } from '~/components/PopperUser';
import Tippy from '@tippyjs/react/headless';
import MenuUserItem from './MenuUserItem';

const cx = classNames.bind(styles);

function MenuUser({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuUserItem key={index} data={item} />);
    };
    return (
        <Tippy
            interactive
            delay={[0, 300]}
            placement="bottom-start"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default MenuUser;
