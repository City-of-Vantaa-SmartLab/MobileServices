import React from 'react';
import { connect } from 'react-redux';
import { formatDate } from 'utils/utils';

const DateHeader = ({timestamp, i18n}) => {
    return (
        <div className="date">
            <p>{formatDate(new Date(), i18n.locale)}</p>
        </div>
    );
};

const mapStateToProps = state => ({
    i18n: state.i18n,
});

export default connect(
    mapStateToProps,
)(DateHeader);
