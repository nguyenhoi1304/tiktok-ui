import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles);

function Accountitem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b7766072da51daff05399a9508ae4448~c5_100x100.jpeg?x-expires=1657652400&x-signature=xQHiy7xn4qGCjLSGVT6MTqCu3BE%3D' alt='Hoa'></img>
            <div className={cx('info')}>
                <p className={cx('name')}>Nguyen hoi</p>
                <span className={cx('username')}>nguyen van hoi</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </div>
        </div>
    );
}

export default Accountitem;