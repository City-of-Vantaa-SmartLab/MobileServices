import React, { Component } from 'react';
import styles from './backgrounds.module.scss';
import Hammer from 'hammerjs';

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
        return <div ref={(el) => (this.node = el)} className={styles['backgrounds']} />;
    }
}

export default Backgrounds;
