import React from 'react';
import styles from './resources.module.scss';
import PropTypes from 'prop-types';

const ContactCard = ({ title, icon, link }) => (
    <a href={link} className={styles['contact-card']}>
        <div className={styles['contact-card-icon']}>
            <img src={icon} alt={title} />
        </div>
        <div className={styles['contact-card-title']}>
            <h4>{title}</h4>
        </div>
    </a>
);

ContactCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    link: PropTypes.string,
};

export default ContactCard;
