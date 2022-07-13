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
    const [searchValue, SetSearchValue] = useState('') // value người dùng nhập
    const [searchResult, setSearchResult] = useState([]);// kq tìm kiếm
    const [showResult, setShowResult] = useState(true) // quyết định ẩn hiện dữ liệu tìm kiếm
    const [loading, setLoading] = useState(false)

    const inputRef = useRef()

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json()) // chuyển sang dạng Json
            // trường hợp thành công
            .then((res) => {
                setSearchResult(res.data)
                setLoading(false)
            })
            // trường hợp lỗi =>
            .catch(() => {
                setLoading(false)
            })
    }, [searchValue])

    const handleClear = () => {
        SetSearchValue('')
        setSearchResult([])
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
                        {searchResult.map(result => (

                            <Accountitem key={result.id} data={result} />
                        ))}
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
                {!!searchValue && !loading && (
                    <button className={cx('clear')}
                        onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;