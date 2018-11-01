import { format, distanceInWordsToNow, differenceInDays } from 'date-fns';
import en from 'date-fns/locale/en';
import fi from 'date-fns/locale/fi';
import sv from 'date-fns/locale/sv';

const locales = { en, fi, sv };

const formatDate = (date, lang) => format(date, 'dddd, MMMM DD', { locale: locales[lang] });

const getTimeDelta = (date, lang) =>
    differenceInDays(new Date(date), new Date()) > 1
        ? distanceInWordsToNow(new Date(date), { addSuffix: true, locale: locales[lang] })
        : format(new Date(date), 'D MMMM, H:mm', { locale: locales[lang] });

const getEventsTime = (date, lang) => format(new Date(date), 'D MMMM, H:mm', { locale: locales[lang] });

const copyToClipboard = (data) => {
    let textField = document.createElement('textarea');
    textField.innerHTML = data;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
};

export { formatDate, getTimeDelta, getEventsTime, copyToClipboard };
