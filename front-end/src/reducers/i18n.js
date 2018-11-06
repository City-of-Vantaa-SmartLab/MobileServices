import { CHANGE_LANGUAGE } from 'actions/actionTypes';

const translations = {
    en: {
        locale: 'en',
        navigation: {
            news: 'News',
            links: 'Resources',
            settings: 'Preferences',
        },
        newsfeed: {
            header: 'Today in Vantaa',
        },
        resources: {
            header: 'How can we help?',
            contactHeader: 'Contact us',
            serviceHeader: 'Services',
            chat: 'chat',
            contact: 'contact',
            feedback: 'give feedback',
            services: {
                vantaa: 'Vantaa.fi',
                palvelukartta: 'Palvelukartta',
                sivistysvantaa: 'Sivistysvantaa',
                jumppaliput: 'Jumppaliput',
                lasten: 'Lasten kulttuuriliput',
                tapahtumat: 'Tapahtumat',
                matkailu: 'Matkailu',
                asiointi: 'Asiointi',
            },
        },
        settings: {
            header: 'My preferences',
            languageHeader: 'My language',
            feedHeader: 'My feed',
            notificationsHeader: 'Push notifications',
            langButtons: {
                en: 'English',
                fi: 'Finnish',
                sv: 'Swedish',
            },
            notificationButtons: {
                always: 'Always',
                never: 'Never',
                alerts: 'Alerts only',
            },
        },
    },
    fi: {
        locale: 'fi',
        navigation: {
            news: 'Uutiset',
            links: 'Palvelut',
            settings: 'Asetukset',
        },
        newsfeed: {
            header: 'Today in Vantaa',
        },
        resources: {
            header: 'How can we help?',
            contactHeader: 'Ota yheyttä',
            serviceHeader: 'Palvelut',
            chat: 'Kysy neuvoa',
            contact: 'Ota yheyttä',
            feedback: 'Anna palautetta',
            services: {
                vantaa: 'Vantaa.fi',
                palvelukartta: 'Palvelukartta',
                sivistysvantaa: 'Sivistysvantaa',
                jumppaliput: 'Jumppaliput',
                lasten: 'Lasten kulttuuriliput',
                tapahtumat: 'Tapahtumat',
                matkailu: 'Matkailu',
                asiointi: 'Asiointi',
            },
        },
        settings: {
            header: 'My preferences',
            languageHeader: 'My language',
            feedHeader: 'My feed',
            notificationsHeader: 'Push notifications',
            langButtons: {
                en: 'Englanti',
                fi: 'Suomi',
                sv: 'Ruotsi',
            },
            notificationButtons: {
                always: 'Always',
                never: 'Never',
                alerts: 'Alerts only',
            },
        },
    },
    sv: {
        locale: 'sv',
        navigation: {
            news: 'Newsfeed',
            links: 'Resources',
            settings: 'Settings',
        },
        newsfeed: {
            header: 'Today in Vantaa',
        },
        resources: {
            header: 'How can we help?',
            contactHeader: 'Contact us',
            serviceHeader: 'Services',
            chat: 'chat',
            contact: 'contact',
            feedback: 'give feedback',
            services: {
                vantaa: 'Vantaa.fi',
                palvelukartta: 'Palvelukartta',
                sivistysvantaa: 'Sivistysvantaa',
                jumppaliput: 'Jumppaliput',
                lasten: 'Lasten kulttuuriliput',
                tapahtumat: 'Tapahtumat',
                matkailu: 'Matkailu',
                asiointi: 'Asiointi',
            },
        },
        settings: {
            header: 'My preferences',
            languageHeader: 'My language',
            feedHeader: 'My feed',
            notificationsHeader: 'Push notifications',
            langButtons: {
                en: 'English',
                fi: 'Finnish',
                sv: 'Swedish',
            },
            notificationButtons: {
                always: 'Always',
                never: 'Never',
                alerts: 'Alerts only',
            },
        },
    },
};

export default (state = translations.en, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return translations[action.payload];
        default:
            return state;
    }
};
