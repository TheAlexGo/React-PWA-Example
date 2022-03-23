import { Link as LinkReact } from 'react-router-dom';
import React, { FC, ReactNode } from 'react';

import { StarIcon } from '@assets/images';
import styles from './Button.module.scss';

export type ButtonProps = {
    children: ReactNode;
    id?: string;
    type?: 'primary' | 'secondary' | 'social' | 'clear' | 'star';
    className?: string;
    onClick?: () => void;
    submit?: boolean;
    isDisabled?: boolean;
    state?: 'hover' | 'static';
    to?: string;
    justifyContent?: 'center' | 'left' | 'right' | 'space-between';
    icon?: string;
    leftIcon?: boolean;
    rightIcon?: boolean;
    fillWidth?: boolean;
    standardLink?: boolean;
    isRounded?: boolean;
};

const Button: FC<ButtonProps> = ({
    submit,
    children,
    type,
    className,
    onClick,
    isDisabled,
    state,
    id,
    to,
    justifyContent,
    icon,
    leftIcon,
    rightIcon,
    fillWidth,
    standardLink,
    isRounded
}): JSX.Element => {
    const classButton = [
        styles.button,
        styles && styles[`button__${type}`],
        className,
        state ? styles[state] : null,
        fillWidth ? styles.button__fillWidth : null,
        isRounded ? styles.button__rounded : null
    ].join(' ');

    const iconElement = type === 'star' && !icon ? <StarIcon /> : <img src={icon} alt={icon} />;

    const content = (
        <>
            {leftIcon && iconElement}
            {children}
            {rightIcon && iconElement}
        </>
    );

    if (to) {
        if (standardLink) {
            return (
                <a href={to} className={classButton}>
                    {content}
                </a>
            );
        }
        return (
            <LinkReact to={to} className={classButton} onClick={onClick}>
                {content}
            </LinkReact>
        );
    }

    return (
        <button
            id={id}
            type={submit ? 'submit' : 'button'}
            className={classButton}
            onClick={onClick}
            disabled={isDisabled}
            style={justifyContent ? { justifyContent } : {}}
        >
            {content}
        </button>
    );
};

export default Button;
