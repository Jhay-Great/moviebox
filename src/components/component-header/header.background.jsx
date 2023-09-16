import React from "react";
import { Component } from "react";
import './header-styles/header.background.styles.css';

export class Background extends Component {
    constructor() {
        super();

        this.state = {

        }
        
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/search/movie?query=John+Wick&api_key=35cb2c49be2518cf8d4c2605cb8affaa').then(response => response.json()).then(data => {
            // console.log(data);
            const {results:result} = data;
            this.setState(result[3]); //would need to return promise to chain error handling
        })
        
        
    }

    render() {
        return (
            <div className="top-movie">
                <img src={`https://image.tmdb.org/t/p/w1280/${this.state.backdrop_path}`} alt={this.state.original_title} />
                <section className="details">
                    <h1> {this.state.title} </h1>
                    <p> {this.state.overview} </p>
                    <button /*href={this.state.video}*/> Watch trailer </button>
                    {/* <p> {this.state.popularity} </p>
                    <p> {this.state.vote_average} </p>
                    <p> {this.state.vote_count} </p> */}
                </section>
            </div>
        )
    }
}

// export default Background;