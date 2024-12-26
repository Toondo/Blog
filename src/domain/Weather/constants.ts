export const categoryMapping: Record<string, { label: string; unit: string }> = {
  POP: { label: '강수확률', unit: '%' },
  PTY: { label: '강수형태', unit: '' }, // 코드값을 추가 매핑해야 할 수도 있음
  PCP: { label: '1시간 강수량', unit: 'mm' },
  REH: { label: '습도', unit: '%' },
  SNO: { label: '1시간 신적설', unit: 'cm' },
  SKY: { label: '하늘상태', unit: '' }, // 코드값을 추가 매핑해야 할 수도 있음
  TMP: { label: '1시간 기온', unit: '°C' },
  TMN: { label: '일 최저기온', unit: '°C' },
  TMX: { label: '일 최고기온', unit: '°C' },
  UUU: { label: '풍속(동서성분)', unit: 'm/s' },
  VVV: { label: '풍속(남북성분)', unit: 'm/s' },
  WAV: { label: '파고', unit: 'm' },
  VEC: { label: '풍향', unit: '°' },
  WSD: { label: '풍속', unit: 'm/s' },
};
