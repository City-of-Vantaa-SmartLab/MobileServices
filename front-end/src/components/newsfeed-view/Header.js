import React from 'react';
import { getDate, formatDate } from '../../utils/utils';
import DateHeader from './DateHeader';
import styles from './header.module.scss';


const Header = props => (
    <div className={styles["header"]}>
        <h2>TODAY IN VANTAA</h2>
        <DateHeader date={formatDate(getDate())} />
    </div>
 );

 export default Header;