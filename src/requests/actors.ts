import { Actors } from '~/domain/Actor';
import { fetcher } from '~/libs/fetch';

export type UsersResponse = {
  actor_id: number;
  first_name: string;
  last_name: string;
  last_update: string;
};

const convertResponseToUsers = (response: UsersResponse[]): Actors => {
  if (!response) {
    return [];
  }

  return response.map((res) => ({
    actorId: res.actor_id,
    firstName: res.first_name,
    lastName: res.last_name,
    lastUpdate: res.last_update,
  }));
};

export const fetchActors = async () => {
  const response = await fetcher(`/api/actors`);

  return convertResponseToUsers(await response.json());
};
