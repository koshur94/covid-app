import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends Component {
    state = {
        data: {},
        country: ''
    };

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData })
    };

    handleCountryChange = async country => {
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
        // fetch data
        this.setState({ data: fetchedData, country })
    };

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <h1 className={styles.text}>COVID APP</h1>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
};

export default App;