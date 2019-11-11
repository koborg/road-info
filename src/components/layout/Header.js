import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header>
                Актуална Пътна Обстановка
                <div className="main-menu">
                    <Link style={linkStyle} to={`/`}>Новини</Link>
                    <a style={linkStyle} href="/#" onClick={this.props.refreshData}>Обнови</a>
                    <Link style={linkStyle} to={`/fuels`}>Цени на горивата</Link>
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