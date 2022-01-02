import moment from 'moment';

export const humanizeTimeStamp = (timestamp) => {
  return moment(timestamp).format('MMM D, YYYY');
};

export const ctfAssetUrl = (url) => 'https:' + url;
