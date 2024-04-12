import { dehydrate, HydrationBoundary, type QueryKey } from '@tanstack/react-query';
import { getQueryClient } from '~/libs/queryClient';

type HydrateProps = {
  children: React.ReactNode;
  queries: {
    queryKey: QueryKey;
    queryFn: Promise<unknown>;
  }[];
};

export default async function Hydrate({ children, queries }: HydrateProps) {
  const queryClient = getQueryClient();

  await Promise.all(
    queries.map(async (query) => {
      await queryClient.prefetchQuery({
        queryKey: query.queryKey,
        queryFn: () => query.queryFn,
      });
    }),
  );

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}
