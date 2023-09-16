import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage';
import MoviePage from './pages/moviepage';

import { Route, Routes } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();

    this.state = {

    };
  }
  
  

  render() {
    return (
      <div className='App'> 
        <Routes>
          <Route path="/" element={<Homepage /> } />
          <Route path="/:id" element={<MoviePage /> } />

        </Routes>
        {/* <Homepage /> */}
        {/* <MoviePage /> */}
      </div>
    )
  }
}


export default App;
