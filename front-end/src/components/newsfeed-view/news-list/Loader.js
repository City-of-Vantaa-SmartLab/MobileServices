import React from 'react';
import styles from './loader.module.scss';

const Loader = ({ active, error }) => (
    <div className={styles['loader-container']}>
        <div className={`${styles['spinner']} ${active ? styles['active'] : ''} `} />
        <div
            className={styles['message']}
            style={error && !active ? { visibility: 'visible' } : { visibility: 'hidden' }}
        >
            <h5>{error === 1 ? 'No more news' : 'Feed fetching failed'}</h5>
        </div>
    </div>
);

export default Loader;
