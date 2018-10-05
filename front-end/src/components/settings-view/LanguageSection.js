import React, {Component} from 'react';
import { connect } from 'react-redux';
import styles from './settings.module.scss';
import LanguageButtonController from './LanguageButtonController';

class LanguageSection extends Component {

    render() {
        const {i18n} = this.props;
        return (
            <section className={styles['settings-section']}>
                    <h4>{i18n.languageHeader}</h4>
                    <div className={styles['button-row']}>
                    {
                        Object.keys(i18n.langButtons).map(key => (
                            <LanguageButtonController 
                                key={key} 
                                lang={key}>
                                    {i18n.langButtons[key]}
                            </LanguageButtonController>
                    ))
                    }
                    </div>
                </section>
        );
    }
}

const mapStateToProps = state => ({
    i18n: state.i18n.settings,
});


export default connect(
    mapStateToProps
)(LanguageSection);
