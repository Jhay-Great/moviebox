import React from "react";

import './header-styles/header.nav.styles.css'

export const Nav = function () {
    return (
        <nav className="homepage-nav">
            <div className="logo">MovieBox</div>
            <div className="search-container">
            <input type="search"
                placeholder="What would you like to find"
                /> 
                <i className="fa fa-search search-icon fa-2x" aria-hidden="true"></i> 
            </div>
            <p>Sign in</p>
        </nav>
    )
}