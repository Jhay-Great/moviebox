import React from "react";

import {Card} from './card';

import { Link } from 'react-router-dom';

import './main-styles/main.cards.styles.css'

export const DisplayCards = function ({name}) {
    // console.log(name);
    return (
        <section className="card-container">
            {name?.map(name => <Link to={`/${name.id}`} key={name.id}> <Card data={{name}} key={name.id} /> </Link> )}
            
        </section>
    )
}

// this component is responsible for creating and containing the cards