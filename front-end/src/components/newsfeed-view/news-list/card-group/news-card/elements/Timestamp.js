import React from 'react';
import { connect } from 'react-redux';
import { getTimeDelta } from 'utils/utils';

const Timestamp = ({time, i18n}) => (
    <span className="timestamp">{getTimeDelta(time, i18n.locale)}</span>
 );

 const mapStateToProps = state => ({
    i18n: state.i18n,
});


export default connect(
    mapStateToProps,
)(Timestamp);
