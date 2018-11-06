import React from 'react';
import styles from './spinner.module.scss';

const Spinner = ({ active }) => (
    <div className={styles['spinner-container']}>
        <div className={`${styles['spinner']} ${active ? styles['active'] : ''} `} />
    </div>
);

export default Spinner;
