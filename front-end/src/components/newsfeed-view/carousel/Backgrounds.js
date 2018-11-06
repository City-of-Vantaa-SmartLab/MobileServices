import React, { Component } from 'react';
import styles from './backgrounds.module.scss';
import Hammer from 'hammerjs';
import { connect } from 'react-redux';

class Backgrounds extends Component {
    componentDidMount() {
        this.hammer = Hammer(this.node);
        this.hammer.on('swipeleft', this.next);
        this.hammer.on('swiperight', this.prev);
    }

    next = () => {
        console.log('Next');
    };

    prev = () => {
        console.log('Prev');
    };

    render() {
        let { loading, error, images } = this.props;
        return (
            <div
                ref={(el) => (this.node = el)}
                className={styles['backgrounds']}
                style={!loading && !error ? { backgroundImage: `url(${images[0]})` } : {}}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.feed.loading,
    images: state.carousel.images,
    error: state.feed.error,
});

export default connect(mapStateToProps)(Backgrounds);
