import { merge } from 'lodash-es';

import { getAPIHost } from '~/domain/Env';
import { ApplicationError, AuthenticationError } from '~/utils/error';

export interface ClientDataFetchOptions<T = undefined, U = undefined> {
  key: string;
  getKeys: (args?: T) => T extends object ? [string, object] : string[];
  placeHolderData?: U;
  revalidate?: number;
  staleTime?: number;
  gcTime?: string;
}

const getEndpointWithEnv = (url: string) => {
  const resultUrl = url.replace(/^\//, '');

  if (resultUrl.match('http(s)*://')) {
    return resultUrl;
  }

  return `${getAPIHost()}/${resultUrl}`;
};

export const fetcher = async (url: string, options?: RequestInit) => {
  const endpoint = getEndpointWithEnv(url);

  const defaultOptions = {
    method: 'GET',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
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

    return res.json();
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
