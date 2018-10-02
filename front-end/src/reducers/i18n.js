import { CHANGE_LANGUAGE } from 'actions/actionTypes';

const translations = {
    en: {
        locale: 'en',
        enButton: 'English',
        fiButton: 'Finnish',
        seButton: 'Swedish',
        navigation: {
            news: 'Newsfeed',
            links: 'Resources',
            settings: 'Settings',
        },
        newsfeed: {
            header: 'TODAY IN VANTAA'
        },
    },
    fi: {
        locale: 'fi',
        enButton: 'Englanti',
        fiButton: 'Suomi',
        seButton: 'Ruotsi',
        navigation: {
            news: 'Uutiset',
            links: 'Linkit',
            settings: 'Asetukset',
        },
        newsfeed: {
            header: 'TODAY IN VANTAA'
        },
    },
    sv: {
        locale: 'sv',
        enButton: 'English',
        fiButton: 'Finnish',
        seButton: 'Swedish',
        navigation: {
            news: 'Newsfeed',
            links: 'Resources',
            settings: 'Settings',
        },
        newsfeed: {
            header: 'TODAY IN VANTAA'
        },
    },
};

export default (state = translations.en, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return translations[action.lang];
        default:
            return state;
    }
};