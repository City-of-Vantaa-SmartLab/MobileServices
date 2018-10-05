import React, {Component} from 'react';
import { connect } from 'react-redux';
import styles from './settings.module.scss';
import NotificationButtonController from './NotificationButtonController';
import { NotificationFilters } from 'actions/actionTypes';

class NotificationsSection extends Component {

    render() {
        const {i18n} = this.props;
        return (
            <section className={styles['settings-section']}>
                    <h4>{i18n.notificationsHeader}</h4>
                    <div className={styles['button-row']}>
                        <NotificationButtonController 
                            filter={NotificationFilters.NEVER}>
                                {i18n.notificationButtons.never}
                        </NotificationButtonController>

                        <NotificationButtonController 
                            filter={NotificationFilters.ALERTS_ONLY}>
                                {i18n.notificationButtons.alerts}
                        </NotificationButtonController>

                        <NotificationButtonController 
                            filter={NotificationFilters.ALWAYS}>
                                {i18n.notificationButtons.always}
                        </NotificationButtonController>
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
)(NotificationsSection);