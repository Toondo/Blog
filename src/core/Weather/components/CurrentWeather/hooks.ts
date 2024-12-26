import { useQuery } from '~/libs/useQuery';
import { fetchCurrentWeather, fetchCurrentWeatherOptions } from '~/requests/Weather/getCurrent';

export const useCurrentWeather = (baseDate: string, baseTime: string) => {
  const currentWeatherQuery = useQuery({
    queryKey: fetchCurrentWeatherOptions.getKeys(),
    queryFn: () => fetchCurrentWeather(baseDate, baseTime),
    staleTime: fetchCurrentWeatherOptions.staleTime,
    throwOnError: () => {
      return false;
    },
  });

  return { currentWeather: currentWeatherQuery.data, isLoading: currentWeatherQuery.isLoading };
};
