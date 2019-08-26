import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import News from './components/News';
import axios from 'axios';
import './App.css';


class App extends Component {
  state = {
    news: []
  }

  componentDidMount() {
    axios.get('https://stamenov.s3-eu-west-1.amazonaws.com/roadInfo.json')
      .then(res => this.setState({ news: res.data.roadArticles }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={props => (
            <div className="wrapper">
              <Header />
              <News news={this.state.news} />
            </div>
          )} />
        </div>
      </Router>
    );
  };
}

export default App;
