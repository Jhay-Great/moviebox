import React, { Component, useState, useEffect } from "react";

import Aside from "../components/movie-page.component/movie-page.aside";

import  Main  from "../components/movie-page.component/movie-page.main";

import './moviepage.styles.css';
import { useParams } from "react-router-dom";

// class MoviePage extends Component {
//     constructor() {
//         super();

//         this.state = {

//         }
//     }

//     componentDidMount() {

//         const { id } = useParams();
        
//         fetch(`https://api.themoviedb.org/3/movie/id?api_key=35cb2c49be2518cf8d4c2605cb8affaa`)
//         .then(response => response.json()).then(details => {
//           const data = details.results.slice(0, 10);
//           this.setState({data});
//         })
//     }
    
      

//     /**
//      * 
//      * @returns fetch('url'moviepath_id) 
//      * url = 'https://api.themoviedb.org/3/movie/{movie_id}'
//      */

//     render() {
//         return (
//             <div className="aside-container">
//                 <Aside />
//                 <Main data={this.state} />
//             </div>
//         )
//     }
// }

const MoviePage = function () {
    const { id } = useParams();

    const ii = [];
    const [state, getState] = useState([]);

    // fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=35cb2c49be2518cf8d4c2605cb8affaa`).then(response => response.json()).then(data => ii.push(data));

    // console.log(ii);
    
    
    useEffect (() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=35cb2c49be2518cf8d4c2605cb8affaa`).then(response => response.json()).then(data => getState(data))
    }, []);
    // console.log(state)
    
    return (
        <div className="aside-container">
            <Aside />
            <Main data={state} />


            {/* <Main data={this.state} /> */}
        </div>
    )
}


export default MoviePage;