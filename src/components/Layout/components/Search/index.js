import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless'
import Accountitem from '../AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchIcon } from '~/components/Icons'
import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { useEffect, useState, useRef } from 'react';


const cx = classNames.bind(styles);

function Search() {
    const [searchValue, SetSearchValue] = useState('')
    const [searchResult, setsearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true)

    const inputRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            setsearchResult([1, 1, 1, 2])
        }, 0)
    })

    const handleClear = () => {
        SetSearchValue('')
        setsearchResult([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }
    return (
        <HeadlessTippy
            interactive="true"
            visible={showResult && searchResult.length > 0}
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
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input placeholder='Search accounts and videos' spellCheck='false'
                    value={searchValue}
                    ref={inputRef}
                    onChange={(e) => SetSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}>
                </input>
                {!!searchValue && (
                    <button className={cx('clear')}
                        onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;