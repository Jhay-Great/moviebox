import React, { Component } from 'react';
// import './App.css';
import { Header } from '../components/component-header/component-header';
import { Main } from '../components/component-main/component-main';
import { Footer } from '../components/component-footer/component-footer';
import ErrMessage from '../components/component-main/errMessage';

class Homepage extends Component {
  constructor() {
    super();

    this.state = {
      error: null,
    };
   
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=35cb2c49be2518cf8d4c2605cb8affaa')
    .then(response => {
      if(!response.ok) throw new Error("Loading incomplete try again...")
       return response.json();
    }).then(details => {
      const data = details.results.slice(0, 10);
      this.setState({data});
      // return details;
    }).catch(err => {
      this.setState({error: err.message})
    })
    .finally()
  }

  

  render() {
    return (
      <div className='App'> 
        <Header name="cool" />
        <div>

          { this.state.error === null ? <Main data={this.state.data} /> : <ErrMessage message={this.state.error} /> }
        
        </div>


        {/* <Main data={this.state.data} > 
          {this.state.error !== null ? this.state.data : <h1>this.state.error</h1>}
        </Main> */}
        {/* <Main data={this.state.data} /> */}
        <Footer />
       
      </div>
    )
  }
}


export default Homepage;
