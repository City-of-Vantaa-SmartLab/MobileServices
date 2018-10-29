import React from 'react';
import styles from './resources.module.scss';
import PropTypes from 'prop-types';

const ServiceCard = ({ title }) => (
    <div className={styles['service-card']}>
        <div className={styles['service-title']}>
            <h4>{title}</h4>
        </div>
    </div>
);

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ServiceCard;
