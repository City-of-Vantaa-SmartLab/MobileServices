import moment from 'moment';

const getDate = () => (moment());

const formatDate = date => (moment(date).format('dddd, MMMM DD'));

const getTimeDelta = date => (moment(date).fromNow());

export {
  getDate,
  formatDate,
  getTimeDelta
};
