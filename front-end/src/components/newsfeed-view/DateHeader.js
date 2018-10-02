import React from 'react';
import styles from "./header.module.scss";

const DateHeader = ({date}) => {
    return (
        <div className={styles["date"]}>
            <h4>{date}</h4>
        </div>
    );
};

export default DateHeader;