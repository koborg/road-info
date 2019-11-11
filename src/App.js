import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import LinearProgress from './components/utils/LoadingBar';
import News from './components/News';
import About from './components/About';
import Fuels from './components/Fuels';
import axios from 'axios';
import uniqueid from 'uniqid';
import './App.css';


class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      news: [],
      loading: false
    };

  }

  getLatestNews = () => {
    this.setState({ loading: true });
    let url = 'https://stamenov.s3-eu-west-1.amazonaws.com/roadInfo.json?v=' + uniqueid();
    axios.get(url)
      .then(res => this.setState({ news: res.data.roadArticles, loading: false }));
  }


  componentDidMount() {
    this.getLatestNews();
  }

  refreshData = () => {
    this.setState({ loading: true });
    axios.get('https://9wxfspu1i7.execute-api.us-east-2.amazonaws.com/default/scrapeRoadInfo')
      .then(res => {
        console.log(res);
        this.getLatestNews();
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header refreshData={this.refreshData} />
          {
            this.state.loading ? <LinearProgress loading={this.state.loading} /> :
              <Route exact path="/" render={props => (
                <div className="wrapper">
                  <News news={this.state.news} />
                </div>
              )} />
          }

          <Route path="/about" component={About} />
          <Route path="/fuels" component={Fuels} />
        </div>
      </Router>
    );
  };
}

export default App;
