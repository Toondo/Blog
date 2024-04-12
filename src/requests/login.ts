import { fetcher } from '~/libs/fetch';

export interface LoginResult {
  result: boolean;
  user_name: string;
}

export interface LoginSuccess {
  result: boolean;
  userName?: string;
}

const convertResponseToResult = (response: LoginResult): LoginSuccess => {
  if (!response) {
    return { result: false };
  }

  return { result: response.result, userName: response.user_name };
};

export const fetchLoginCheckKey = {
  keyName: 'login',
  getKey: () => [fetchLoginCheckKey.keyName] as const,
};

export const fetchLoginCheck = async (userName: string, userPassword: string) => {
  const response = await fetcher('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login_id: userName,
      login_password: userPassword,
    }),
  });

  return convertResponseToResult(await response.json());
};
