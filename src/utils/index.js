import moment from 'moment';

export const humanizeTimeStamp = (timestamp) => {
  return moment(timestamp).format('D MMM, YYYY');
};

export const ctfAssetUrl = (url) => 'https:' + url;
