import React from 'react';
import { connect } from 'react-redux';
import { formatDate } from 'utils/utils';
import DateHeader from './DateHeader';
import './Header.css';


const Header = props => (
    <div className="header">
        <h2>TODAY IN VANTAA</h2>
        <DateHeader date={formatDate(new Date(), props.i18n.locale)} />
    </div>
 );

 const mapStateToProps = state => ({
    i18n: state.i18n,
});


export default connect(
    mapStateToProps,
)(Header);
