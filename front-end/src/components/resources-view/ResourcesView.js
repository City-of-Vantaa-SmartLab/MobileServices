import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './resources.module.scss';
import ContactSection from './ContactSection';
import ServiceSection from './ServiceSection';

class ResourcesView extends Component {
    constructor(props) {
        super(props);
        this.serviceRef = React.createRef();
        this.serviceScroll = new Event('serviceScroll');
    }

    componentDidMount() {
        this.serviceRef.current.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        window.dispatchEvent(this.serviceScroll);
    };

    componentWillUnmount() {
        this.serviceRef.current.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        let { i18n } = this.props;
        return (
            <div className={styles['container']} ref={this.serviceRef}>
                <h1>{i18n.resources.header}</h1>
                <ContactSection />
                <ServiceSection />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    i18n: state.i18n,
});

export default connect(mapStateToProps)(ResourcesView);
