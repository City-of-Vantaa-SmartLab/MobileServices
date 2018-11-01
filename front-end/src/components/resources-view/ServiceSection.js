import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './resources.module.scss';
import ServiceCard from './ServiceCard';
import SectionHeader from './SectionHeader';
import { services } from './serviceLinks';

class ServiceSection extends Component {
    render() {
        const { i18n } = this.props;
        return (
            <section className={styles['section']}>
                <SectionHeader service header={i18n.serviceHeader} />
                <div className={styles['card-row']}>
                    {Object.keys(services).map((key) => (
                        <ServiceCard
                            key={key}
                            title={i18n.services[key]}
                            link={services[key].link}
                            img={services[key].img}
                        />
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
