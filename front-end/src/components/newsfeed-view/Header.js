import React from 'react';
import { getDate, formatDate } from '../../utils/utils';
import DateHeader from './DateHeader';
import styles from './header.module.scss';


const Header = props => (
    <div className={styles["header"]}>
        <DateHeader date={formatDate(getDate())} />
        <h1>TODAY IN VANTAA</h1>
    </div>
 );

 export default Header;