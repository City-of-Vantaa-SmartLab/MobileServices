import React, { Component } from 'react';
import styles from './backgrounds.module.scss';
import Hammer from 'hammerjs';
import { connect } from 'react-redux';
import sampleSize from 'lodash/sampleSize';

class Backgrounds extends Component {
    constructor(props) {
        super(props);

        this.state = {
            randomImageIndex: 0,
            randomFactIndex: 0,
        };
    }

    componentDidMount() {
        this.hammer = Hammer(this.node);
        this.hammer.on('swipeleft', this.next);
        this.hammer.on('swiperight', this.prev);
    }

    next = () => {
        this.setState({ randomImageIndex: (this.state.randomImageIndex + 1) % 3 });
    };

    prev = () => {
        this.setState({
            randomImageIndex: this.state.randomImageIndex === 0 ? 2 : (this.state.randomImageIndex - 1) % 3,
        });
    };

    render() {
        let { loading, error, images, facts } = this.props;

        if (
            (!this.randomImages || this.randomImages.length === 0) &&
            (!this.randomFacts || this.randomFacts.length === 0)
        ) {
            this.randomImages = sampleSize(images, 3);
            this.randomFacts = sampleSize(facts, 3);
        }

        console.log(this.randomImages);

        return (
            <div
                ref={(el) => (this.node = el)}
                className={styles['backgrounds']}
                style={
                    !loading && !error
                        ? { backgroundImage: `url(${this.randomImages[this.state.randomImageIndex]})` }
                        : {}
                }
            />
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.feed.loading,
    images: state.carousel.images,
    facts: state.carousel.facts,
    error: state.feed.error,
});

export default connect(mapStateToProps)(Backgrounds);
