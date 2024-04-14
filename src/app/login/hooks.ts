import { useQuery } from '@tanstack/react-query';

import { LoginSuccess } from '~/requests/login';

import { fetchLoginCheck, fetchLoginCheckKey } from './../../requests/login';

interface LoginProps {
  userName: string;
  userPassword: string;
}
export const useFetchLoginCheck = ({ userName, userPassword }: LoginProps) => {
  const query = useQuery<LoginSuccess>({
    queryKey: fetchLoginCheckKey.getKey(),
    queryFn: () => fetchLoginCheck(userName, userPassword),
  });

  return [query.data, query] as const;
};
