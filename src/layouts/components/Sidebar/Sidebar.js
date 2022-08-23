import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as UserService from '~/services/UserService'
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

const PER_PAGE = 5

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([])

    useEffect(() => {
        UserService
            .getSuggested({ page: 1, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers(prevUser => [...prevUser, ...data])
            })
            .catch((error) => console.log(error))
    }, []);


    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts label='Suggested accounts' data={suggestedUsers}
            />
            <SuggestedAccounts label='Following accounts' />
        </aside>
    );
}

export default Sidebar;