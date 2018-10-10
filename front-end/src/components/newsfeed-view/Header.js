import React from 'react';
import { connect } from 'react-redux';
import DateHeader from './DateHeader';
import styles from './header.module.scss';

const Header = ({ i18n }) => (
    <div className={styles['header']}>
        <h1>{i18n.newsfeed.header}</h1>
        <DateHeader />
    </div>
);

const mapStateToProps = (state) => ({
    i18n: state.i18n,
});

export default connect(mapStateToProps)(Header);
