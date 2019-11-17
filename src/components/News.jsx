import React from 'react';
import Article from './Article';

const News = props => {
    const articles = Object.keys(props.news);
        
        return articles.map((article, i) => (
            <Article key={i} article={props.news[article]}/>
        ));
}

export default News;
 