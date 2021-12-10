import urljoin from 'url-join';

export const BASE_URL = process.env.PUBLIC_URL ?? '/';

export const USER_URL = urljoin(BASE_URL, ':username');

export const APP_PATHS = {
  HOME: urljoin(BASE_URL),
  ABOUT: urljoin(BASE_URL, 'about'),
  PRICING: urljoin(BASE_URL, 'pricing'),
  CAREER: urljoin(BASE_URL, 'career'),
  LOGIN: urljoin(BASE_URL, 'login'),
  SIGNUP: urljoin(BASE_URL, 'register'),
  USER: {
    BASE: USER_URL,
  },
};
