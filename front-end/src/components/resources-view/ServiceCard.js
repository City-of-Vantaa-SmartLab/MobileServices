import React from 'react';
import styles from './resources.module.scss';
import PropTypes from 'prop-types';

const ServiceCard = ({ title, link, img }) => (
    <div className={styles['service-card']} style={img ? { backgroundImage: `url(${img})` } : {}}>
        <a href={link} className={styles['service-title']}>
            <h4>{title}</h4>
        </a>
    </div>
);

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    img: PropTypes.string,
};

export default ServiceCard;
