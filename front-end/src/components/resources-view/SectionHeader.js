import React, { Component } from 'react';
import styles from './s_header.module.scss';

class SectionHeader extends Component {
    constructor(props) {
        super(props);
        this.state = { light: false, sticky: false };
        this.headerRef = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('serviceScroll', this.handleScroll);
        this.setLightHeader();
    }

    setLightHeader = () => {
        this.setState({ light: this.headerRef.current.getBoundingClientRect().top < 0.15 * window.innerHeight });
    };

    handleScroll = () => {
        this.setLightHeader();
        this.setState({ sticky: this.props.service && this.headerRef.current.getBoundingClientRect().top < 5 });
    };

    componentWillUnmount() {
        window.removeEventListener('serviceScroll', this.handleScroll);
    }

    render() {
        return (
            <div
                className={`${styles['header']} ${this.state.light ? styles['light'] : ''} ${
                    this.state.sticky ? styles.sticky : ''
                }`}
                ref={this.headerRef}
            >
                <h4>{this.props.header}</h4>
            </div>
        );
    }
}

export default SectionHeader;
