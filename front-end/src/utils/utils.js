import { format, distanceInWordsStrict, differenceInDays, getYear } from 'date-fns';
import en from 'date-fns/locale/en';
import fi from 'date-fns/locale/fi';
import sv from 'date-fns/locale/sv';
import sampleSize from 'lodash/sampleSize';

const locales = { en, fi, sv };

const formatDate = (date, lang) => format(date, 'dddd, MMMM DD', { locale: locales[lang] });

const getTimeDelta = (date, lang) => {
    if (getYear(new Date(date)) !== getYear(new Date())) {
        return format(new Date(date), 'D MMMM YYYY, H:mm', { locale: locales[lang] });
    } else if (differenceInDays(new Date(), new Date(date)) < 1) {
        return distanceInWordsStrict(new Date(), new Date(date), { addSuffix: true, locale: locales[lang] });
    }
    return format(new Date(date), 'D MMMM, H:mm', { locale: locales[lang] });
};

const getEventsTime = (date, lang) => format(new Date(date), 'D MMMM, H:mm', { locale: locales[lang] });

const copyToClipboard = (data) => {
    let textField = document.createElement('textarea');
    textField.innerHTML = escapeHTML(data);
    document.body.appendChild(textField);
    textField.select();
    let isCopySuccessful = document.execCommand('copy');
    textField.remove();
    return isCopySuccessful;
};

const share = (data) => {
    if (navigator.share) {
        navigator.share({ url: data.url, title: data.title, description: data.description }).then(
            () => {
                return true;
            },
            () => {
                return false;
            }
        );
    } else {
        let textToBeCopied = data.title + '\r\n\r\n' + data.description + '\r\n\r\n' + data.url;
        let isCopySuccessful = copyToClipboard(textToBeCopied);
        return isCopySuccessful;
    }
};

const escapeHTML = (unsafe_str) => {
    return unsafe_str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/\//g, '&#x2F;');
};

const getLang = () => {
    const lang = localStorage.getItem('lang');

    if (lang && lang !== 'undefined') {
        return lang;
    } else return 'fi';
};

const saveLang = (data) => {
    return localStorage.setItem('lang', data);
};

const preloadImages = (images) => {
    const preloaded = sampleSize(images, 3);
    preloaded.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
    });
    return preloaded;
};

export { formatDate, getTimeDelta, getEventsTime, copyToClipboard, share, getLang, saveLang, preloadImages };
