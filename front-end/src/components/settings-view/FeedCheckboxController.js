import { connect } from 'react-redux';
import { toggleFeed } from 'actions';
import Checkbox from './Checkbox';

//const colorTags = ['instagram', 'twitter', 'facebook', 'youtube'];

const mapStateToProps = (state, ownProps) => ({
    active: state.feedTypes[ownProps.type],
    //colorTag: colorTags.indexOf(ownProps.type) !== -1 ? ownProps.type : '',
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(toggleFeed(ownProps.type));
        },
    };
};

const FeedCheckboxController = connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkbox);

export default FeedCheckboxController;
