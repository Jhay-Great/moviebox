import React from "react";

import "./movie-page.styles/movie-page.aside.styles.css";

const Aside = function () {
  return (
    <aside>
      <div className="aside-logo">MovieBox</div>
      <nav className="aside-nav">
        
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#" className="active-navlink">Movies</a></li>
            <li><a href="#">TV Series</a></li>
            <li><a href="#">Upcoming</a></li>
        </ul>
      </nav>
      <section className="ads">
        <p>Play movie quizzes and earn free tickets</p>
        <p className="small-text">50k people are playing now</p>
        <button className="start-play-btn">Start playing</button>
      </section>
      <button className="log-out-btn">Log out</button>
    </aside>
  );
};

export default Aside;
