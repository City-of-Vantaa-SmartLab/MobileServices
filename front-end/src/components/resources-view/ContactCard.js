import React from 'react';
import styles from './resources.module.scss';
import PropTypes from 'prop-types';

const ContactCard = ({ title }) => (
    <div className={styles['contact-card']}>
        <h4>{title}</h4>
    </div>
);

ContactCard.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ContactCard;
