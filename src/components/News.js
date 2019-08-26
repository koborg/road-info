import React, { Component } from 'react';
import Article from './Article';

class News extends Component {
    render() {
        return Object.keys(this.props.news).map((article, i) => (
            <Article key={i} article={this.props.news[article]}/>
        ));
    };
}

export default News;
