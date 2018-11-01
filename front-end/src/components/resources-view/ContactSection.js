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
                    <ContactCard title={i18n.chat} icon={chatIcon} />
                    <ContactCard
                        title={i18n.contact}
                        icon={contactIcon}
                        link="http://www.vantaa.fi/hallinto_ja_talous/tietoa_vantaasta/yhteystiedot"
                    />
                    <ContactCard
                        title={i18n.feedback}
                        icon={feedbackIcon}
                        link="https://asiointi.vantaa.fi/anna-palautetta#/"
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
