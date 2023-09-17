import React from "react";

import './movie-page.styles/movie-page.main.styles.css';

import img from '../component-extra/img.jpg';

const Main = function ({data}) {

    console.log(data.release_date)
    // console.log(Date.UTC(data.release_date + '').split('-').join(', '))

    
    // console.log(new Date(data.release_date))
    // const v = data.release_date.split('-').join(', ');
    return (
    <main className="aside-main">
        <section className="video">
            {/* {data.poster_path} */}
        
            <img src={`https://image.tmdb.org/t/p/w1280/${data.poster_path}`} alt={data.original_title} />

        </section>
        <section className="moviepage-details">
            <div className="topper">
                <div className="topper-left">
                    <span data-testid="movie-title">{data.title}</span>
                    <span className="minor-details">
                        <ul>
                            <li data-testid= "movie-release-date">
                                { (data.release_date + '').split('-').join('  ') }
                            </li>
                            <li className="pg-rating">12</li>
                            <li data-testid="movie-runtime">
                                {

(data?.runtime + '').split('').splice(0, 1).join('') * 60 + +(data?.runtime + '').split('').splice(-2).join('')
                                    // const minToHr = (${data.runtime} + '').split('');
                                    // const hour = minToHr.splice(-2).join('') / 60;
                                    // const hrSum = hour + +(minToHr.join(''));
                                    // const mins = hrSum * 60;
                                    
                                    // data.runtime
                            }
                            </li>
                        </ul>
                    </span>
                    <span className="genres">
                        {
                            data?.genres?.map(el => <p key={el. id}> {el.name} </p>)
                        }
                    </span>
                </div>
                <span className="movie-rating">
                    <span className="faded-text"> {+(data.vote_average + '').split('').slice(0, 3).join('')} </span>| <span> {+(data?.vote_count + '').split('').slice(0, 3).join('')}</span>k  
                </span>
            </div>

            {/* bottom left side of grid layout */}
            <div className="left">
                <p data-testid="movie-overview"> {data.overview}?</p>
                <div className="crew">
                    <p>John john: <span className="highlighted-text">Dave Malone</span></p>
                    <p>John john: <span className="highlighted-text">Dave Malone</span></p>
                    <p>John john: <span className="highlighted-text">Dave Malone</span></p>
                </div>
                <select name="" id=""> <span>Top rated movie #65</span>
                    <option value="">Awards 9 nominations</option>
                </select>
            </div>
            <div className="right">
                <p>See Showtimes</p>
                <p>More watch options</p>
                <div className="movie-options">
                    <img src={img} alt="some image" />
                    <img src={img} alt="some image" />
                    <img src={img} alt="some image" />
                    <p>The best Movies and Shows in September</p>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Main;