import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './backgrounds.module.scss';

class Backgrounds extends Component {
    render() {
        let { loading, error, images } = this.props;
        return (
            <div
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
