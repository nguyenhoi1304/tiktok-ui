import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useEffect, useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss'
import images from '~/assets/images/';
import Accountitem from '../AccountItem';

const cx = classNames.bind(styles)
function Header() {
    const [searchResult, setsearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setsearchResult([])
        }, 0)
    })

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt='tiktok' />
                <Tippy
                    interactive="true"
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h3 className={cx('search-title')}>
                                    Accounts
                                </h3>
                                <Accountitem />
                                <Accountitem />
                                <Accountitem />
                                <Accountitem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder='Search accounts and videos' spellCheck='false' />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />


                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('action')}>

                </div>
            </div>
        </header>
    );
}

export default Header;