import { CHANGE_LANGUAGE } from 'actions/actionTypes';

const translations = {
    en: {
        locale: 'en',
        navigation: {
            news: 'Newsfeed',
            links: 'Resources',
            settings: 'Settings',
        },
        newsfeed: {
            header: 'Today in Vantaa',
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
            news: 'Newsfeed',
            links: 'Resources',
            settings: 'Settings',
        },
        newsfeed: {
            header: 'Today in Vantaa',
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
