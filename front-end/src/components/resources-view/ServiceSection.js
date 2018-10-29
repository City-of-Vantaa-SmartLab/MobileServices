import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './resources.module.scss';
import ServiceCard from './ServiceCard';

class ServiceSection extends Component {
    render() {
        const { i18n } = this.props;
        return (
            <section className={styles['section']}>
                <h4>{i18n.serviceHeader}</h4>
                <div className={styles['card-row']}>
                    <ServiceCard title="randomName" />
                    <ServiceCard title="oneMoreRandomName" />
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    i18n: state.i18n.resources,
});

export default connect(mapStateToProps)(ServiceSection);
