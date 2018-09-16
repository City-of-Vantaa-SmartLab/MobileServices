import React, { Component } from 'react';
import Header from './Header';
import Backgrounds from './Backgrounds';
import NewsList from './news-list/NewsList';

class NewsfeedView extends Component {
    state = {active: false}

    componentDidMount() {
        window.addEventListener('scroll', this.activateFeed);
    }

    activateFeed = () => {
        if (!this.state.active) {
            this.setState({active: true});
        }
    }

    render() {
        return (
            <div>
                <Backgrounds />
                <Header />
                <NewsList active={this.state}/>
                
            </div>
        );
    }
}

export default NewsfeedView;