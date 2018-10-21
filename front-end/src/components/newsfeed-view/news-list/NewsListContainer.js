import { connect } from 'react-redux';
import { FEED_FETCH_REQUEST, FEED_ACTIVATED, SAVE_SCROLL_POSITION } from 'actions/actionTypes';
import NewsList from './NewsList';

const mapStateToProps = (state) => ({
    loading: state.fetch.loading,
    feed: state.fetch.feed,
    error: state.fetch.error,
    last: state.fetch.last,
    activated: state.activated,
    scroll: state.scroll,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onRequest: () => {
            dispatch({ type: FEED_FETCH_REQUEST });
        },
        feedActivated: () => {
            dispatch({ type: FEED_ACTIVATED });
        },
        saveScrollPosition: (position) => {
            dispatch({
                type: SAVE_SCROLL_POSITION,
                payload: position,
            });
        },
    };
};

const NewsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsList);

export default NewsListContainer;
