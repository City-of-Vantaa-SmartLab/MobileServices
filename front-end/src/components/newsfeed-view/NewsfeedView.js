import React, { Component } from 'react';
import Header from './Header';
import Backgrounds from './carousel/Backgrounds';
import NewsList from './news-list/NewsList';

class NewsfeedView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opacity: 1.0,
        };
        this.opacityScrollLimit = 150;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({ opacity: (this.opacityScrollLimit - window.scrollY) / this.opacityScrollLimit });
    };

    render() {
        return (
            <div>
                <Backgrounds />
                <Header opacity={this.state.opacity} />
                <NewsList />
            </div>
        );
    }
}

export default NewsfeedView;
