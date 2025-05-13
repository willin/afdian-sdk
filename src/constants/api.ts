const API_BASE = 'https://afdian.com/api/open';

const getUrl = (path: string): string => `${API_BASE}/${path}`;

export default {
  ping: getUrl('ping'),
  queryOrder: getUrl('query-order'),
  querySponsor: getUrl('query-sponsor')
};
