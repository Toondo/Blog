// import { getCurrentDateAndTime } from '~/libs/date';
import Hydrate from '~/providers/hydrate';
import { fetchCurrentWeather, fetchCurrentWeatherOptions } from '~/requests/Weather/getCurrent';

import WeatherSection from './components/WeatherSection';

const MainContent = () => {
  //   const { baseDate, baseTime } = getCurrentDateAndTime();
  return (
    <>
      <Hydrate
        queries={[
          {
            queryKey: fetchCurrentWeatherOptions.getKeys(),
            queryFn: fetchCurrentWeather('20241226', '1800'),
          },
        ]}
      >
        <WeatherSection />
      </Hydrate>
    </>
  );
};

export default MainContent;
