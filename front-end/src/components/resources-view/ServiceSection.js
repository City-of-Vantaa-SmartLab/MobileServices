import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './resources.module.scss';
import ServiceCard from './ServiceCard';
import SectionHeader from './SectionHeader';

class ServiceSection extends Component {
    render() {
        const { i18n } = this.props;
        return (
            <section className={styles['section']}>
                <SectionHeader service header={i18n.serviceHeader} />
                <div className={styles['card-row']}>
                    {Object.values(i18n.services).map((item) => (
                        <ServiceCard key={item.title} title={item.title} link={item.link} />
                    ))}
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    i18n: state.i18n.resources,
});

export default connect(mapStateToProps)(ServiceSection);
