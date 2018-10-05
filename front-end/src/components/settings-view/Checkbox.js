import React from 'react';
import styles from './settings.module.scss';


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

 export default Checkbox;