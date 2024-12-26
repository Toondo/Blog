import { dehydrate, HydrationBoundary } from '~/libs/queryClient';
import { getQueryClient } from '~/libs/queryClient';
import { QueryKey } from '~/libs/useQuery';


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
