import { useQuery } from '@tanstack/react-query';

import { LoginSuccess, fetchLoginCheck, fetchLoginCheckKey } from '~/requests/login';

interface LoginProps {
  userEmail: string;
  userPassword: string;
}
export const useFetchLoginCheck = ({ userEmail, userPassword }: LoginProps) => {
  const query = useQuery<LoginSuccess>({
    queryKey: fetchLoginCheckKey.getKey(),
    queryFn: () => fetchLoginCheck(userEmail, userPassword),
  });

  return [query.data, query] as const;
};
