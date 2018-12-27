import React, { Component } from 'react';
import styles from './backgrounds.module.scss';
import Hammer from 'hammerjs';
import { connect } from 'react-redux';
import sampleSize from 'lodash/sampleSize';
import { preloadImages } from 'utils/utils';

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
        this.setState({
            randomImageIndex: (this.state.randomImageIndex + 1) % 3,
            randomFactIndex: (this.state.randomFactIndex + 1) % 3,
        });
    };

    prev = () => {
        this.setState({
            randomImageIndex: this.state.randomImageIndex === 0 ? 2 : (this.state.randomImageIndex - 1) % 3,
            randomFactIndex: this.state.randomFactIndex === 0 ? 2 : (this.state.randomFactIndex - 1) % 3,
        });
    };

    render() {
        let { images, facts, preloaded } = this.props;
        if (!this.randomImages || this.randomImages.length === 0) {
            if (preloaded.length === 0) {
                this.randomImages = preloadImages(images);
            } else {
                this.randomImages = preloaded;
            }
        }
        if (!this.randomFacts || this.randomFacts.length === 0) {
            this.randomFacts = sampleSize(facts, 3);
        }

        return (
            <div
                ref={(el) => (this.node = el)}
                className={styles['backgrounds']}
                style={{ backgroundImage: `url(${this.randomImages[this.state.randomImageIndex]})` }}
            >
                <div className={styles['random-facts']}>{this.randomFacts[this.state.randomFactIndex]}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    images: state.carousel.images,
    preloaded: state.carousel.preloaded,
    facts: state.i18n.facts,
});

export default connect(mapStateToProps)(Backgrounds);
