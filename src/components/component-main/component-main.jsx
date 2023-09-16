import React from "react";
import { DisplayCards } from "./main.cards";
import './main-styles/component-main.styles.css';

export const Main = function (props) {
    // console.log(props.data)
    return (
        <main className="topTen">
            <section className="section-header">
            <h2>
                Top 10 movies
            </h2>
            <a href="#">See more</a>
            </section>
            
            <DisplayCards name={props.data} />
           
        </main>
    )
}