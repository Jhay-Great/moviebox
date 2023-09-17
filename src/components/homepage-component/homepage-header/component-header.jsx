import React from "react";

import { Nav } from "./header.nav";

import { Background } from './header.background'

import './header-styles/component-header.styles.css';
// import { Slider } from "./header.slider";

export const Header = function (props) {
    // console.log(props) 
    return (
        <div className="header">
            <Background />
            <Nav />
            {/* <Slider /> */}

        </div>
    )
}