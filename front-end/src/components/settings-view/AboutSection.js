import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './settings.module.scss';

class LanguageSection extends Component {
    render() {
        const { i18n } = this.props;
        return (
            <section className={styles['settings-section']}>
                <h4>{i18n.aboutHeader}</h4>
                <div>
                    {i18n.about.split('\n').map((item, i) => {
                        return <p key={i}>{item}</p>;
                    })}
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    i18n: state.i18n.settings,
});

export default connect(mapStateToProps)(LanguageSection);
