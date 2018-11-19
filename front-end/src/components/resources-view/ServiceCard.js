import React from 'react';
import styles from './resources.module.scss';
import PropTypes from 'prop-types';

const ServiceCard = ({ title, link }) => (
    <div className={styles['service-card']}>
        <a href={link} className={styles['service-title']}>
            <h4>{title}</h4>
        </a>
    </div>
);

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default ServiceCard;
