import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss'

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    disabled = false,
    text = false,
    rounded = false,
    children,
    classnName,
    leftIcon,
    RightIcon,
    onclick,
    ...passProps }) {

    let Comp = 'button'
    const props = {
        onclick,
        ...passProps
    };

    if (disabled) {
        delete props.onclick
    }
    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        classnName,
        leftIcon,
        RightIcon,
    })

    return (
        <Comp className={classes} {...props}>

            {leftIcon && <span className={cx('icon')}>
                {leftIcon}
            </span>}

            <span className={cx('title')}>
                {children}
            </span>

            {RightIcon && <span className={cx('icon')}>
                {RightIcon}
            </span>}
        </Comp>
    );
}

export default Button;