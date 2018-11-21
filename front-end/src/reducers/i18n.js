import { CHANGE_LANGUAGE } from 'actions/actionTypes';
import { getLang } from 'utils/utils';

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
            contact: 'contact us',
            feedback: 'give feedback',
            services: {
                vantaa: {
                    title: 'Vantaa.fi',
                    link: 'http://www.vantaa.fi',
                },
                palvelukartta: {
                    title: 'City map',
                    link: 'http://kartta.vantaa.fi',
                },
                // sivistysvantaa: {
                //     title: 'Sivistysvantaa',
                //     link: 'http://www.sivistysvantaa.fi/sivistysvantaa/index.html',
                // },
                // jumppaliput: {
                //     title: 'Jumppaliput',
                //     link: 'https://jumppaliput.vantaa.fi/app/',
                // },
                // lasten: {
                //     title: 'Lasten kulttuuriliput',
                //     link: 'https://kulttuuriliput.vantaa.fi/app/consumer',
                // },
                tapahtumat: {
                    title: 'Events',
                    link: 'http://www.vantaa.fi/tapahtumienvantaa',
                },
                matkailu: {
                    title: 'Tourism',
                    link: 'https://www.visitvantaa.fi',
                },
                asiointi: {
                    title: 'E-services',
                    link: 'http://www.vantaa.fi/asioi_verkossa',
                },
            },
        },
        settings: {
            header: 'My preferences',
            languageHeader: 'My language',
            feedHeader: 'My feed',
            notificationsHeader: 'Push notifications',
            langButtons: {
                fi: 'Suomi',
                sv: 'Svenska',
                en: 'English',
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
            header: 'Tänään Vantaalla',
        },
        resources: {
            header: 'Voimmeko auttaa?',
            contactHeader: 'Ota yhteyttä',
            serviceHeader: 'Palvelut',
            chat: 'Kysy neuvoa',
            contact: 'Ota yhteyttä',
            feedback: 'Anna palautetta',
            services: {
                vantaa: {
                    title: 'Vantaa.fi',
                    link: 'http://www.vantaa.fi',
                },
                palvelukartta: {
                    title: 'Palvelukartta',
                    link: 'http://kartta.vantaa.fi',
                },
                // sivistysvantaa: {
                //     title: 'Sivistysvantaa',
                //     link: 'http://www.sivistysvantaa.fi/sivistysvantaa/index.html',
                // },
                // jumppaliput: {
                //     title: 'Jumppaliput',
                //     link: 'https://jumppaliput.vantaa.fi/app/',
                // },
                // lasten: {
                //     title: 'Lasten kulttuuriliput',
                //     link: 'https://kulttuuriliput.vantaa.fi/app/consumer',
                // },
                tapahtumat: {
                    title: 'Tapahtumat',
                    link: 'http://www.vantaa.fi/tapahtumienvantaa',
                },
                matkailu: {
                    title: 'Matkailu',
                    link: 'https://www.visitvantaa.fi',
                },
                asiointi: {
                    title: 'Asiointi',
                    link: 'http://www.vantaa.fi/asioi_verkossa',
                },
            },
        },
        settings: {
            header: 'Asetukset',
            languageHeader: 'Kieli',
            feedHeader: 'Oma uutisvirta',
            notificationsHeader: 'Push notifications',
            langButtons: {
                fi: 'Suomi',
                sv: 'Svenska',
                en: 'English',
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
            news: 'Nyheter',
            links: 'Tjänster',
            settings: 'Inställningar',
        },
        newsfeed: {
            header: 'Vanda idag',
        },
        resources: {
            header: 'Kan vi hjälpa dig?',
            contactHeader: 'Kontakta Oss',
            serviceHeader: 'Tjänster',
            chat: 'chat',
            contact: 'Kontakt Oss',
            feedback: 'Ge respons',
            services: {
                vantaa: {
                    title: 'Vanda.fi',
                    link: 'http://www.vantaa.fi',
                },
                palvelukartta: {
                    title: 'Kartservice',
                    link: 'http://kartta.vantaa.fi',
                },
                // sivistysvantaa: {
                //     title: 'Sivistysvantaa',
                //     link: 'http://www.sivistysvantaa.fi/sivistysvantaa/index.html',
                // },
                // jumppaliput: {
                //     title: 'Jumppaliput',
                //     link: 'https://jumppaliput.vantaa.fi/app/',
                // },
                // lasten: {
                //     title: 'Lasten kulttuuriliput',
                //     link: 'https://kulttuuriliput.vantaa.fi/app/consumer',
                // },
                tapahtumat: {
                    title: 'Evenemang',
                    link: 'http://www.vantaa.fi/tapahtumienvantaa',
                },
                matkailu: {
                    title: 'Turism',
                    link: 'https://www.visitvantaa.fi',
                },
                asiointi: {
                    title: 'E-tjänster',
                    link: 'http://www.vantaa.fi/asioi_verkossa',
                },
            },
        },
        settings: {
            header: 'Mina inställningar',
            languageHeader: 'Språk',
            feedHeader: 'Eget flöde',
            notificationsHeader: 'Push notifications',
            langButtons: {
                fi: 'Suomi',
                sv: 'Svenska',
                en: 'English',
            },
            notificationButtons: {
                always: 'Always',
                never: 'Never',
                alerts: 'Alerts only',
            },
        },
    },
};

const lang = getLang();

export default (state = translations[lang], action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return translations[action.payload];
        default:
            return state;
    }
};
