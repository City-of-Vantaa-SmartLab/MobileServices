import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './settings.module.scss';
import LanguageSection from './LanguageSection';
import FeedsSection from './FeedsSection';

class SettingsView extends Component {
    render() {
        let { i18n } = this.props;
        return (
            <div className={styles['settings-container']}>
                <h1>{i18n.settings.header}</h1>
                <LanguageSection />
                <FeedsSection />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    i18n: state.i18n,
});

export default connect(mapStateToProps)(SettingsView);
