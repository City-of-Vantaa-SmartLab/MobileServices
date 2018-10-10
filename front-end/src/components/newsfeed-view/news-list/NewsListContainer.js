import { connect } from 'react-redux';
import { FETCH_REQUEST } from 'actions/actionTypes';
import NewsList from './NewsList';


const mapStateToProps = (state) => ({
    loading: state.fetch.loading,
    feed: state.fetch.feed,
    error: state.fetch.error,
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onRequest: (filter) => {
            dispatch({type: FETCH_REQUEST});
        },
    };
};

const NewsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsList);

export default NewsListContainer;