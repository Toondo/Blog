import { getOpenAPIKey } from '~/domain/Env';
import { CurrentWeatherType } from '~/domain/Weather/Current';
import { ClientDataFetchOptions, fetcher } from '~/libs/fetch';

interface WeatherItem {
  baseDate: string; // 관측 날짜
  baseTime: string; // 관측 시간
  category: string; // 데이터 종류
  nx: number; // 격자 X 좌표
  ny: number; // 격자 Y 좌표
  obsrValue: string; // 관측값
}

interface WeatherResponse {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body: {
      dataType: string;
      items: {
        item: WeatherItem[];
      };
      pageNo: number;
      numOfRows: number;
      totalCount: number;
    };
  };
}

const convertResponseToDomain = (response: WeatherResponse): CurrentWeatherType[] => {
  const items = response.response.body.items.item;

  return items.map((item) => ({
    baseDate: item.baseDate,
    baseTime: item.baseTime,
    category: item.category,
    obsrValue: item.obsrValue,
  }));
};

export const fetchCurrentWeatherOptions: ClientDataFetchOptions<undefined, CurrentWeatherType[]> = {
  key: '/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst',
  getKeys: () => [fetchCurrentWeatherOptions.key],
  placeHolderData: [],
  staleTime: 1000 * 60,
};

export const fetchCurrentWeather = async (baseDate: string, baseTime: string) => {
  const params = {
    ServiceKey: getOpenAPIKey(),
    pageNo: '1',
    numOfRows: '100',
    dataType: 'JSON',
    base_date: baseDate,
    base_time: baseTime,
    nx: '60',
    ny: '127',
  };

  const queryString = new URLSearchParams(params).toString();
  const res = await fetcher(`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?${queryString}`);
  return convertResponseToDomain(res);
};
