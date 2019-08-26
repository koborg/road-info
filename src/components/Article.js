import React, { Component } from 'react';

class Article extends Component {
    render() {
        const { title, date, content } = this.props.article;
        return (
            <div className="article">
                <div className="title">{title}</div>
                <div className="date">{date}</div>
                <div className="content">{content}</div>
            </div>
        );
    };
}

export default Article;
