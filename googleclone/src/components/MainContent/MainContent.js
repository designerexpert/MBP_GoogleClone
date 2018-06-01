import React, { Component } from 'react';
import './index.css';

class MainContent extends Component {
    state = {
        searchCriteria: '',
    }

    handleChange = (e) => {
        this.setState({ searchCriteria: e.target.value });
    }

    searchHandler = () => {
        let combined = `https://www.google.com/search?q=${this.state.searchCriteria}`;
        window.location.href = combined;
    }

    iflHandler = () => {
        let combined = `https://www.${this.state.searchCriteria}.com`;
        window.location.href = combined;
    }

    render() {
        return (
            <div className='mainContent_wrapper'>
                <div className='search_area'>
                    <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' />
                    <input type='text' onChange={this.handleChange} />
                </div>
                <div className='search_buttons'>
                    <button
                        className='btn'
                        onClick={this.searchHandler}
                    >Google Search</button>
                    <button
                        className='btn'
                        onClick={this.iflHandler}
                    >I'm Feeling Lucky</button>
                </div>
            </div>
        );
    }
}

export default MainContent;