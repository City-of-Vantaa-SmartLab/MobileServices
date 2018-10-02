import React from 'react';
import { connect } from 'react-redux';
import { formatDate } from 'utils/utils';
import DateHeader from './DateHeader';
import styles from './header.module.scss';


const Header = props => (
    <div className={styles['header']}>
        <DateHeader date={formatDate(new Date(), props.i18n.locale)} />
        <h1>TODAY IN VANTAA</h1>
    </div>
 );

 const mapStateToProps = state => ({
    i18n: state.i18n,
});


export default connect(
    mapStateToProps,
)(Header);
