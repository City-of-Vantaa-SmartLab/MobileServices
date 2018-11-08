import React, { Component } from 'react';
import Header from './Header';
import Backgrounds from './carousel/Backgrounds';
import NewsListContainer from './news-list/NewsListContainer';

class NewsfeedView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opacity: 1.0,
        };
        this.opacityScrollLimit = 500;
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
                <NewsListContainer />
            </div>
        );
    }
}

export default NewsfeedView;
