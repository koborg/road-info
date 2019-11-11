import React from 'react';

const Article = props => {
    const { title, date, content } = props.article;
    return (
        <div className="article">
            <div className="title">{title}</div>
            <div className="date">{date}</div>
            <div className="content">{content}</div>
        </div>
    );
}

export default Article;
