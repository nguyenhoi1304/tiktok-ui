import styles from './Modal.module.scss'

import classNames from 'classnames/bind';
import Portal from '../Portal';

const cx = classNames.bind(styles)

function Modal({ isOpen = false, children }) {

    if (!isOpen) {
        return null;
    }
    return (
        <Portal className={cx('wrapper')}>
            <div className={cx('overlay')}></div>
            <div className={cx('body')}>{children} </div>
        </Portal>
    );
}

export default Modal;