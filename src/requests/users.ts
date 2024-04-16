import { Users } from '~/domain/User';
import { fetcher } from '~/libs/fetch';

export type UsersResponse = {
  user_id: string;
  user_name: string;
  email: string;
  created_at: string;
  is_active: boolean;
};

const convertResponseToUsers = (response: UsersResponse[]): Users => {
  if (!response) {
    return [];
  }

  return response.map((res) => ({
    userId: res.user_id,
    userName: res.user_name,
    email: res.email,
    createdAt: res.created_at,
    isActive: res.is_active,
  }));
};

export const fetchActors = async () => {
  const response = await fetcher(`/api/users`);

  return convertResponseToUsers(await response.json());
};
