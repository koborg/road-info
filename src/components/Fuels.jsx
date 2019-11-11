import React, { Component } from 'react';


class Fuels extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fuel: {}
        }
    }

    render() {
        const { fuel } = this.state;
        const fuelKeys = Object.keys(fuel);
        let dateStamp = '';

        let fuelList = fuelKeys.map((f, i) => (
            <div id={'fuel_' + i} key={JSON.parse(fuel[f]).fuel} className="fuel-item">{JSON.parse(fuel[f]).fuel} : {JSON.parse(fuel[f]).price}{JSON.parse(fuel[f]).dimension}</div>
        ));

        if(fuel[0]) {
            dateStamp = JSON.parse(fuel[0]).date
        }
        

        return (
            <div className="wrapper">
                
                <h3>Date: {dateStamp}</h3>
                {fuelList}
            </div>
        )
    }

    componentDidMount() {
        const api = 'https://stamenov.s3-eu-west-1.amazonaws.com/fuelsInfo.json';

        const getFuels = () => {
            return fetch(api)
                .then(res => res.json())
                .then(fuel => this.setState({ fuel: fuel }))
                .catch(error => console.error(error))
        };

        getFuels();
    }
}

export default Fuels