import React from 'react';

// Styles
import './header.scss';

const Header = (props) => {
    return (
        <header className="header">
            <strong className="header__title">{props.title}</strong>
        </header>
    );
};

export default Header;