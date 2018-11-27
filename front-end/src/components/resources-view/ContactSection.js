import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './resources.module.scss';
import ContactCard from './ContactCard';
import chatIcon from 'assets/images/chat-icon.svg';
import contactIcon from 'assets/images/contact-icon.svg';
import feedbackIcon from 'assets/images/feedback-icon.svg';
import SectionHeader from './SectionHeader';

class ContactSection extends Component {
    render() {
        const { i18n } = this.props;
        return (
            <section className={styles['section']}>
                <SectionHeader header={i18n.contactHeader} />
                <div className={styles['card-row']}>
                    <ContactCard title={i18n.contacts.chat.title} icon={chatIcon} link={i18n.contacts.chat.link} />
                    <ContactCard
                        title={i18n.contacts.contact.title}
                        icon={contactIcon}
                        link={i18n.contacts.contact.link}
                    />
                    <ContactCard
                        title={i18n.contacts.feedback.title}
                        icon={feedbackIcon}
                        link={i18n.contacts.feedback.link}
                    />
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    i18n: state.i18n.resources,
});

export default connect(mapStateToProps)(ContactSection);
