import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import News from './components/News';
import About from './components/About';
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

  refreshData = () => {
    axios.get('https://9wxfspu1i7.execute-api.us-east-2.amazonaws.com/default/scrapeRoadInfo')
      .then(res => {
        console.log(res);
        axios.get('https://stamenov.s3-eu-west-1.amazonaws.com/roadInfo.json')
          .then(res => {
            this.setState({ news: res.data.roadArticles });
          });
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header refreshData={this.refreshData}/>
          <Route exact path="/" render={props => (
            <div className="wrapper">
              <News news={this.state.news} />
            </div>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  };
}

export default App;
