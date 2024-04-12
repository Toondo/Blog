import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';

export { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export const getQueryClient = cache(() => new QueryClient());
