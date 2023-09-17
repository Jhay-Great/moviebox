import React from "react";

import './component-footer.styles.css';

export const Footer = function () {
    return (
        <footer>
            <section className="social-media">
                <span className="facebook"></span>
                <span className="instagram"></span>
                <span className="twitter"></span>
                <span className="youtube"></span>
            </section>

            <section className="conditions">
                <span>Condition of Use</span>
                <span>Privacy & Policy</span>
                <span>Press Room</span>
            </section>

            <section className="authentication">
                <p>&copy;2023 MovieBox by greatCodes</p>
            </section>
        </footer>
    )
}