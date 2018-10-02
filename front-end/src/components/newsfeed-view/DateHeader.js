import React from 'react';
import { connect } from 'react-redux';
import { formatDate } from 'utils/utils';
import styles from './header.module.scss';

const DateHeader = ({timestamp, i18n}) => {
    let date = timestamp ? new Date(timestamp) : new Date();
    return (
        <div className={styles['date']}>
            <h4>{formatDate(date, i18n.locale)}</h4>
        </div>
    );
};

const mapStateToProps = state => ({
    i18n: state.i18n,
});

export default connect(
    mapStateToProps,
)(DateHeader);
