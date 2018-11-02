import React from 'react';
import styles from './toast-notification.module.scss';

class ToastNotification extends React.Component {
    render() {
        return <div className={styles['toast-notification']}>{this.props.text}</div>;
    }
}

export default ToastNotification;
