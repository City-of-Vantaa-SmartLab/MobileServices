import React from 'react';
import styles from './settings.module.scss';
import PropTypes from 'prop-types';

const Button = ({active, children, onClick}) => (
    <a 
        href='' 
        onClick={e => {
            e.preventDefault();
            onClick();
            }} 
        className={`${active ? styles['active']:''}` }>
        {children}
    </a>
 );

 Button.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
 };

 export default Button;