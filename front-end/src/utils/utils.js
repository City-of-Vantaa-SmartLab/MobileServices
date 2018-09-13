import moment from 'moment';

const getDate = () => (moment());

const formatDate = date => (moment(date).format('dddd, MMMM DD'));

export {
  getDate,
  formatDate,
};
