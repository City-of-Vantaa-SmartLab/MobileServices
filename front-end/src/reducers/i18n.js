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
            contacts: {
                chat: {
                    title: 'chat',
                    link: 'http://www.vantaa.fi/hallinto_ja_talous/tietoa_vantaasta/vantaa-info',
                },
                contact: {
                    title: 'contact us',
                    link: 'http://www.vantaa.fi/hallinto_ja_talous/tietoa_vantaasta/yhteystiedot',
                },
                feedback: {
                    title: 'give feedback',
                    link: 'https://asiointi.vantaa.fi/anna-palautetta',
                },
            },
            services: {
                vantaa: {
                    title: 'Vantaa.fi',
                    link: 'http://www.vantaa.fi/front_page',
                },
                työpaikat: {
                    title: 'Open positions',
                    link: 'http://www.vantaa.fi/hallinto_ja_talous/tyo_ja_elinkeinot/vantaa_tyonantajana',
                },
                palvelukartta: {
                    title: 'City map',
                    link:
                        'https://kartta.vantaa.fi/?setlanguage=en&e=25502000&n=6687000&r=4&w=&l=Kaupunkikartta_gd2&o=100',
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
                    link: 'https://www.visitvantaa.fi/en/frontpage/',
                },
                asiointi: {
                    title: 'E-services',
                    link: 'http://www.vantaa.fi/administration_and_economy/participate_and_make_an_impact/e-services',
                },
            },
        },
        settings: {
            header: 'My preferences',
            languageHeader: 'My language',
            feedHeader: 'My feed',
            notificationsHeader: 'Push notifications',
            aboutHeader: 'About the app',
            about:
                'Web analytics \nGoogle Analytics collects data on visitors to the mobiili.vantaa.fi website. The data are available to the maintainers of the mobiili.vantaa.fi website.',
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
        facts: {
            1: 'The oldest building in the greater Helsinki area can be found in Vantaa. The Church of St. Lawrence was built in about 1452.',
            2: 'The largest green roof in Finland is on the office and business center Dixi. The surface area of the roof is 6300 m2.',
            3: 'In the new year of 2017, there were 17 people living in Vantaa who were more than one hundred years old!',
            4: 'Did you know that in Vantaa in 2017, there were 2849 tractors, while in 1976 the amount was only 644?',
            5: 'In Martinlaakso there is a 56 meters high tower called Martintorni. By comparison: The Linnanmäki Rocket rises to 60 meters and the Helsinki Olympic Stadium tower is 72 meters high.',
            6: 'There are about 362 hectares of arable land owned by the city in Vantaa city farms. Of this arable land, the town cultivated malting barley on 97 hectares, which is less than a quarter.',
            7: 'The Helsinge Vicarage in Vantaa was previously the center of the entire Helsinki metropolitan area. Before the foundation of Helsinki in 1550, the center of the region was The Helsinge Vicarage.',
            8: 'There are several medieval villages left in Vantaa, such as Tikkurila, Hakunila, Ylästö, Veromiehenkylä and Silvola.',
            9: "The science center Heureka's foundation stone includes a cd recording, which also includes a speech made by president at that time, Mauno Koivisto.",
            10: "King Gustav III of Sweden stopped at King's Road to eat a picnic lunch in 1775. The place is now known as Kuninkaanmäki (Kings Hill).",
            11: 'Did you know that in Vantaa in the autumn of 1916 a large number of Chinese prisoners arrived to cut down forest for the Russian land fortification?',
            12: 'The word "Tikkuri" in the name of Tikkurila is an old unit of measurement meaning ten squirrel skins.',
            13: 'The oldest railway station made of bricks in Finland is located in Vantaa. It is the old Tikkurila railway station, built in 1862, where today the Vantaa City Museum is located.',
            14: 'People have lived in Vantaa for about 9,000 years. When Helsinki was still under the sea from the Ice Age, the life of Stone Age flourished in Vantaa.',
            15: 'During the Stone Age, the centers of Vantaa were Myyrmäki and Tikkurila. In both places vast archaeological studies have been carried out.',
            16: "During the Middle Ages Vantaa's main language was swedish. At the beginning of the Middle Ages in the 13th century, settlers from Sweden moved to Vantaa. Up until the first half of the 20th century, the main language of Vantaa remained as Swedish.",
            17: 'Did you know that during the Stone Age cannibalism has been practiced  in Vantaa? The excavations of the Stone Age settlement of Hommas, which were left under the ring road, were found human bones that seemed to have been cut and eaten.',
            18: 'In the 1950s, when an airport runway was built, several empty asphalt barrels were left behind. These barrels were utilized to build roofs for buildings in Vantaa.',
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
            contacts: {
                chat: {
                    title: 'Kysy neuvoa',
                    link: 'http://www.vantaa.fi/hallinto_ja_talous/tietoa_vantaasta/vantaa-info',
                },
                contact: {
                    title: 'Ota yhteyttä',
                    link: 'http://www.vantaa.fi/hallinto_ja_talous/tietoa_vantaasta/yhteystiedot',
                },
                feedback: {
                    title: 'Anna palautetta',
                    link: 'https://asiointi.vantaa.fi/anna-palautetta',
                },
            },
            services: {
                vantaa: {
                    title: 'Vantaa.fi',
                    link: 'http://www.vantaa.fi',
                },
                työpaikat: {
                    title: 'Työpaikat',
                    link: 'http://www.vantaa.fi/hallinto_ja_talous/tyo_ja_elinkeinot/vantaa_tyonantajana',
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
            aboutHeader: 'Tietoa Sovelluksesta',
            about:
                'Kävijäseuranta \nMobiili.vantaa.fi-verkkosivustolla Google Analytics kerää tietoa kävijöistä. Tiedot ovat mobiili.vantaa.fi-verkkosivuston ylläpitäjien käytettävissä.',

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
        facts: {
            1: 'Koko pääkaupunkiseudun vanhin rakennus löytyy Vantaalta. Pyhän Laurin kirkko eli Helsingin pitäjän kirkko valmistui noin vuonna 1452.',
            2: 'Vantaalla sijaitsee Suomen suurin viherkatto toimisto- ja liikekeskus Dixin katolla. Viherkaton pinta-ala on 6300 m2.',
            3: 'Vuodenvaihteessa 2017–2018 Vantaalla asui 17 ihmistä, jotka olivat täyttäneet huimat sata vuotta!',
            4: 'Tiesitkö, että Vantaalla oli vuonna 2017 traktoreita 2849, kun taas vuonna 1976 niitä oli vain 644?',
            5: 'Martinlaaksossa sijaitsee 56 metriä korkea Martintorni. Vertailun vuoksi: Linnanmäen Raketti nousee 60 metrin korkeuteen ja Olympiastadionin torni on 72-metrinen.',
            6: 'Vantaan kaupungin maatilojen hoidossa on noin 362 hehtaaria kaupungin omistamaa peltoalaa. Tästä peltoalasta kaupunki viljeli mallasohraa 97 hehtaarilla eli vajaalla neljäsosalla.',
            7: 'Vantaalla sijaitseva Helsingin pitäjän kirkonkylä oli aiemmin koko pääkaupunkiseudun keskus. Ennen Helsingin perustamista vuonna 1550 seudun keskuspaikka oli Helsingin pitäjän kirkonkylä. ',
            8: 'Vantaalla on säilynyt useita keskiaikaisia kyliä, kuten esimerkiksi Dickursby (Tikkurila), Håkansböle (Hakunila), Övistsböle (Ylästö), Skattmansby (Veromiehenkylä) ja Sillböle (Silvola).',
            9: 'Tiedekeskus Heurekan peruskiven sisältä löytyy muun muassa ääniä sisältävä cd-levy, jolla kuullaan myös silloisen presidentin Mauno Koiviston puhe.',
            10: 'Ruotsin kuningas Kustaa III pysähtyi Kuninkaantien varrelle syömään  pikniklounaan vuonna 1775. Paikka tunnetaan nykyään nimellä Kuninkaanmäki.',
            11: 'Tiesitkö, että Vantaalle saapui syksyllä 1916 suuri joukko kiinalaista vankityövoimaa kaatamaan metsää venäläisten rakennuttamia maalinnoituksia varten?',
            12: 'Tikkurilan nimessä esiintyvä sana ”tikkuri” on vanha mittayksikkö, jolla tarkoitettiin kymmentä oravannahkaa.',
            13: 'Suomen vanhin tiilinen asemarakennus sijaitsee Vantaalla. Se on vuonna 1862 rakennettu Tikkurilan vanha asema, jossa nykyään sijaitsee Vantaan kaupunginmuseo.',
            14: 'Vantaalla on asunut ihmisiä jo reilun 9000 vuoden ajan. Kun Helsinki oli jääkauden jäljiltä vielä merenpinnan alla, kukoisti kivikauden elämä Vantaalla.',
            15: 'Jo kivikaudella Vantaan keskuspaikat olivat Myyrmäki ja Tikkurila. Molemmilla paikoilla on tehty laajoja arkeologisia tutkimuksia.',
            16: 'Keskiajalla Vantaan valtakieli oli ruotsi. Keskiajan alussa 1200-luvulla Vantaalle muutti uudisasukkaita Ruotsista. Aina 1900-luvun alkupuoliskolle saakka Vantaan valtakielenä säilyi ruotsi.',
            17: 'Tiesitkö, että kivikaudella Vantaalla on harjoitettu kannibalismia? Kehäradan alle jääneen Hommaksen kivikautisen asuinpaikan kaivauksilta löytyi ihmisluita, joita näyttää leikellyn ja syödyn.',
            18: '1950-luvulla lentokentän kiitorataa rakentaessa jäi yli paljon tyhjiä asfalttitynnyreitä. Nämä tynnyrit otettiin hyötykäyttöön vantaalaisten rakennusten kattoja rakentaessa.',
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
            contacts: {
                chat: {
                    title: 'chat',
                    link: 'http://www.vantaa.fi/hallinto_ja_talous/tietoa_vantaasta/vantaa-info',
                },
                contact: {
                    title: 'Kontakta Oss',
                    link: 'http://www.vanda.fi/forvaltning_och_ekonomi/information_om_vanda/kontaktuppgifter',
                },
                feedback: {
                    title: 'Ge respons',
                    link: 'https://asiointi.vantaa.fi/anna-palautetta',
                },
            },
            chat: 'chat',
            contact: 'Kontakta Oss',
            feedback: 'Ge respons',
            services: {
                vantaa: {
                    title: 'Vanda.fi',
                    link: 'http://www.vanda.fi',
                },
                työpaikat: {
                    title: 'Lediga arbestplatser',
                    link: 'http://www.vanda.fi/forvaltning_och_ekonomi/arbete_och_naringsliv/vanda_som_arbetsgivare',
                },
                palvelukartta: {
                    title: 'Kartservice',
                    link:
                        'https://kartta.vantaa.fi/?setlanguage=sv&e=25502000&n=6687000&r=4&w=&l=Kaupunkikartta_gd2&o=100',
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
                    link: 'https://www.visitvantaa.fi/sv/startsida/',
                },
                asiointi: {
                    title: 'E-tjänster',
                    link: 'http://www.vanda.fi/forvaltning_och_ekonomi/delta_och_paverka/e-tjanster',
                },
            },
        },
        settings: {
            header: 'Mina inställningar',
            languageHeader: 'Språk',
            feedHeader: 'Eget flöde',
            notificationsHeader: 'Push notifications',
            aboutHeader: 'Information om applikationen',
            about:
                'Besökaruppföljning \nGoogle Analytics samlar in information om besökare på webbplatsen mobiili.vantaa.fi. Informationen kan användas av dem som upprätthåller webbplatsen mobiili.vantaa.fi.',

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
        facts: {
            1: 'Den äldsta byggnaden i hela huvudstadsregionen finns i Vanda. Helsinge kyrka S:t Lars byggdes omkring 1452.',
            2: 'Det största gröna taket i Finland finns i Vanda på Dixis kontor- och affärscentrum. Ytan på taket är 6300 m2.',
            3: 'Vid årsskiftet 2017-2018 bodde det 17 personer i Vanda som hade fyllt hundra år!',
            4: 'Visste du att det finns 2849 traktorer i Vanda år 2017, medan år 1976 endast 644 traktorer?',
            5: 'Det ligger ett 56 meter högt torn Martintorni i Mårtensdal. Som jämförelse: Raketten i Borgbacken stiger till 60 meters höjd och Olympiastadions torn är 72 meter högt.',
            6: 'Det finns cirka 362 hektar jordbruksmark som ägs av staden Vanda. Av detta jordbruksland odlade staden maltkorn på 97 hektar, det vill säga mindre än en fjärdedel.',
            7: 'Helsinge kyrkoby i Vanda var tidigare centrum för hela Helsingfors storstadsområde. Helsinge kyrkoby var centrum av regionen ända fram till att Helsingfors grundades år 1550.',
            8: 'Det finns flera medeltida byar kvar i Vanda, som Dickursby, Håkansböle, Övitsböle, Skattmansby och Sillböle.',
            9: 'Vetenskapscentret Heurekas grundsten innehåller en ljud-CD, som också innehåller tal av president Mauno Koivisto.',
            10: 'Kung Gustav III av Sverige stannade vid Kungsvägen för att äta en picknicklunch år 1775. Platsen är nu känd som Kungsbacka.',
            11: 'Visste du att på hösten 1916 kom det till Vanda en stor grupp med kinesisk fångstarbetskraft för att fälla skog i samband med ryssarnas befästingsbyggen?',
            12: 'Ordet "Tikkuri" i namnet Tikkurila är en gammal måttenhet som betyder tio ekorrskinn.',
            13: 'Den äldsta järnvägstationen gjordes av tegelsten i Finland och ligger i Vanda. Byggnaden är den gamla Dickursby tågstation, som byggdes 1862. Vanda stadsmuseum finns inhyst i Dickursby gamla station.',
            14: 'Människor har bott i Vanda i ca 9000 år. När Helsingfors fortfarande fanns under havet under istiden blomstrade stenålderslivet i Vanda.',
            15: 'Under stenåldern var Myrbacka och Dickursby Vandas centrum. På båda ställena har omfattande arkeologiska forskningar genomförts.',
            16: 'Under medeltiden var Vandas huvudspråk svenska. I början av medeltiden på 1200-talet flyttade det bosättare från Sverige till Vanda. Fram till den första hälften av 1900-talet var svenska det dominerande språket i Vanda.',
            17: 'Visste du att under stenåldern har Vanda utövat kannibalism? Utgrävningarna av stenålderns bosättning Hommas, som blev under ringvägen, hittade man människoben som verkar vara skuret och ätet.',
            18: 'På 1950-talet, när man byggde en flygbana, blev kvar flera tomma asfalttunnor. Dessa tunnor användes för att bygga tak på byggnader i Vanda.',
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
