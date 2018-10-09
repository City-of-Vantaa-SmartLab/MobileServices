import React from 'react';
import { connect } from 'react-redux';
import { getTimeDelta } from 'utils/utils';
import styles from './timestamp.module.scss';

const Timestamp = ({time, i18n}) => (
    <h5 className={styles['timestamp']}>{getTimeDelta(time, i18n.locale)}</h5>
 );

 const mapStateToProps = state => ({
    i18n: state.i18n,
});


export default connect(
    mapStateToProps,
)(Timestamp);
