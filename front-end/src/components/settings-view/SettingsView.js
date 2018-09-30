import React, { Component } from 'react';
import { changeLanguage } from 'actions';
import { connect } from 'react-redux';

class SettingsView extends Component {
    
    render() {
        let {i18n} = this.props;
        return (
            <div>
                <p>Choose language:</p>
                <button value='en' onClick = {() => this.props.onClick('en')}>{i18n.enname}</button>
                <button value='fi' onClick = {() => this.props.onClick('fi')}>{i18n.finame}</button>
                <button value='se' onClick = {() => this.props.onClick('se')}>{i18n.sename}</button>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    i18n: state.i18n,
});

const mapDispatchToProps = dispatch => ({
    onClick: lang => dispatch(changeLanguage(lang))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsView);