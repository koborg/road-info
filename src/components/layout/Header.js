import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header>
                Актуална Пътна Обстановка
                <div className="main-menu">
                    <a style={linkStyle} href="/#" onClick={this.props.refreshData}>Refresh</a>
                </div>
            </header>
        );
    }
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;