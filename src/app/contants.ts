import urljoin from 'url-join';

export const BASE_URL = process.env.PUBLIC_URL ?? '/';

export const USER_URL = urljoin(BASE_URL, ':username');

export const APP_PATHS = {
  OVERVIEW: urljoin(BASE_URL, 'overview'),
  PARK_NOW: urljoin(BASE_URL, 'parknow'),
  COOPERATION: urljoin(BASE_URL, 'cooperation'),
  HOME: urljoin(BASE_URL),
  TEAM: urljoin(BASE_URL, 'team'),
  SUPPORT: urljoin(BASE_URL, 'support'),
  CAREER: urljoin(BASE_URL, 'career'),
  LOGIN: urljoin(BASE_URL, 'login'),
  SIGNUP: urljoin(BASE_URL, 'signup'),
  NEWS_ROOM: urljoin(BASE_URL, 'newsroom'),
  ORDER: urljoin(BASE_URL, 'order'),
  USER: {
    BASE: USER_URL,
  },
};
