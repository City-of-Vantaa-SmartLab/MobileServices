import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './resources.module.scss';
import ContactCard from './ContactCard';

class ContactSection extends Component {
    render() {
        const { i18n } = this.props;
        return (
            <section className={styles['section']}>
                <h4 className={styles['light']}>{i18n.contactHeader}</h4>
                <div className={styles['card-row']}>
                    <ContactCard title={i18n.chat} />
                    <ContactCard title={i18n.contact} />
                    <ContactCard title={i18n.feedback} />
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    i18n: state.i18n.resources,
});

export default connect(mapStateToProps)(ContactSection);
