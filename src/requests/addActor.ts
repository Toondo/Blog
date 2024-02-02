import { fetcher } from '~/libs/fetch';

export interface ActorRequest {
  first_name: string;
  last_name: string;
}

export interface addActorResult {
  result: boolean;
}

const convertResponseToResult = (response: addActorResult): boolean => {
  if (!response) {
    return false;
  }

  return true;
};

export const addActor = async (first: string, last: string) => {
  const response = await fetcher('/api/actors', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: first,
      last_name: last,
    }),
  });

  return convertResponseToResult(await response.json());
};
