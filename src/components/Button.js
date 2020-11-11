import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, type, onCLick, buttonStyle, buttonSize }) => {
    const STYLES = ['btn-primary', 'btn-outline'];
    const SIZES = ['btn-medium', 'btn-large'];

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <Link to="/sign-up" className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onCLick={onCLick} type={type}>
                {children}
            </button>
        </Link>
    )
}

export default Button;
