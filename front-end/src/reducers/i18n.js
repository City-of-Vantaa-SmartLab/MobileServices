const translations = {
    en: {
        locale: 'en',
        enname: 'English',
        finame: 'Finnish',
        sename: 'Swedish',
        navigation: {
            news: 'Newsfeed',
            links: 'Resources',
            settings: 'Settings',
        },
    },
    fi: {
        locale: 'fi',
        enname: 'Englanti',
        finame: 'Suomi',
        sename: 'Ruotsi',
        navigation: {
            news: 'Uutiset',
            links: 'Linkit',
            settings: 'Asetukset',
        },
    },
    se: {
        locale: 'se',
        enname: 'English',
        finame: 'Finnish',
        sename: 'Swedish',
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