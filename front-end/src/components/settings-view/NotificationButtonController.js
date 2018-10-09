import { connect } from 'react-redux';
import { setNotificationFilter } from 'actions';
import Button from './Button';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.notifications,
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setNotificationFilter(ownProps.filter));
        },
    };
};

const NotificationButtonController = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);

export default NotificationButtonController;