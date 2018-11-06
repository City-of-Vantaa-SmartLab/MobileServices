import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './settings.module.scss';
import FeedCheckboxController from './FeedCheckboxController';

class FeedsSection extends Component {
    render() {
        const { i18n, feedTypes } = this.props;
        return (
            <section className={styles['settings-section']}>
                <h4>{i18n.feedHeader}</h4>
                <div className={styles['button-row']}>
                    {Object.keys(feedTypes).map((key) => (
                        <FeedCheckboxController key={key} type={key}>
                            {key}
                        </FeedCheckboxController>
                    ))}
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    feedTypes: state.feedTypes,
    i18n: state.i18n.settings,
});

export default connect(mapStateToProps)(FeedsSection);
