import React from 'react';
import styles from './settings.module.scss';
import PropTypes from 'prop-types';

const Checkbox = (props) => (
    <a 
        href='' 
        onClick={e => {
            e.preventDefault();
            props.onClick();
            }}  
        className={`${props.active ? styles['active']:''} ${styles[props.colorTag]}` }>
        {props.children}
    </a>
 );

 Checkbox.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
 };


 export default Checkbox;