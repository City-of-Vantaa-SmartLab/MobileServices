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
    },
};

export default (state = translations.en, action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return translations[action.lang];
        default:
            return state;
    }
};