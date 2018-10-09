import { connect } from 'react-redux';
import { changeLanguage } from 'actions';
import Button from './Button';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.lang === state.i18n.locale,
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(changeLanguage(ownProps.lang));
        },
    };
};

const LanguageButtonController = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);

export default LanguageButtonController;