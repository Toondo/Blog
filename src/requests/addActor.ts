import { fetcher } from '~/libs/fetch';

export interface addActorResult {
  result: boolean;
}

const convertResponseToResult = (response: addActorResult): boolean => {
  if (!response) {
    return false;
  }

  return true;
};

export const addActor = async (firstName: string, lastName: string) => {
  const response = await fetcher('/api/actors', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
    }),
  });

  return convertResponseToResult(await response.json());
};
