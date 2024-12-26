export interface WeatherItem {
  baseDate: string; // 기준 날짜 (예: "20241225")
  baseTime: string; // 기준 시간 (예: "0630")
  category: string; // 데이터 종류 (예: "LGT", "PTY")
  fcstDate: string; // 예보 날짜 (예: "20241225")
  fcstTime: string; // 예보 시간 (예: "0700")
  fcstValue: string; // 예보 값 (카테고리에 따라 다름)
  nx: number; // 격자 X 좌표
  ny: number; // 격자 Y 좌표
}

export interface WeatherResponse {
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
