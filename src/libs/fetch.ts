import { merge } from 'lodash-es';

import { ApplicationError, AuthenticationError } from '~/utils/error';

export const fetcher = async (url: string, options?: RequestInit) => {
  const endpoint = `${process.env.NEXT_PUBLIC_PAGE_HOST}${url}`;

  const defaultOptions = {
    method: 'get',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
    next: {
      revalidate: 0,
    },
  };

  const mergeOptions = merge(defaultOptions, options);

  try {
    const res = await fetch(endpoint, mergeOptions);

    if (!res.ok) {
      switch (res.status) {
        case 400:
          throw new ApplicationError('Application Error');
        case 401:
          throw new AuthenticationError('Authentication Error');
        default:
          throw new ApplicationError('Application Error');
      }
    }

    return res;
  } catch (error) {
    if (error instanceof ApplicationError) {
      console.warn(`Error message: ${error.message}, code: ${error.code}`);
    } else if (error instanceof AuthenticationError) {
      console.warn(`Error message: ${error.message}, code: ${error.code}`);
    } else if (error instanceof Error) {
      console.warn(`Error message: ${error.message}, cause: ${error.cause}`);
    }

    return Promise.reject({ status: 'error' });
  }
};
