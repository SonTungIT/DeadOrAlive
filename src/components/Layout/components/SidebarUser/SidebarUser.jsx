import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SidebarUser.module.scss';
import { MenuCollapseIcon, MenuOpenIcon } from '~/components/Layout/components/Icons';
import { SidebarDataUser } from '~/assets/data/SidebarDataUser';
import SubMenuUser from './SubMenuUser';

const cx = classNames.bind(styles);

function SidebarUser() {
    const [openNavigation, setOPenNavigation] = useState(false);
    const toggleNavigation = () => setOPenNavigation(!openNavigation);

    return (
        <div className={openNavigation ? cx('sidebar', 'sidebar-respon') : cx('sidebar')}>
            <div className={cx('top-bar')}>
                {openNavigation ? (
                    <span onClick={toggleNavigation}>
                        <MenuCollapseIcon />
                    </span>
                ) : (
                    <span onClick={toggleNavigation}>
                        <MenuOpenIcon />
                    </span>
                )}
            </div>
            {SidebarDataUser.map((item, index) => (
                <SubMenuUser key={index} item={item} openNavigation={openNavigation} />
            ))}
        </div>
    );
}

export default SidebarUser;
