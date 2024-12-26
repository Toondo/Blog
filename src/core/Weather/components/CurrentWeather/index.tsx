'use client';

import { Cloud, MapPin } from 'lucide-react';
import React from 'react';


import { getCurrentDateAndTime } from '~/libs/date';

import { useCurrentWeather } from './hooks';
import styles from './styles.module.css';

const CurrentWeather = () => {
  const { baseDate, baseTime } = getCurrentDateAndTime();
  const { currentWeather, isLoading } = useCurrentWeather(baseDate, baseTime);

  if (isLoading) {
    return <>Loading....</>;
  }

  return (
    <div className={styles.currentWeatherContainer}>
      <div className={styles.locationContainer}>
        <MapPin size={20} />
        <h2>서울</h2>
      </div>

      <div className={styles.weatherDisplay}>
        <Cloud size={120} className={styles.weatherIcon} />
        <div className={styles.weatherInfo}>
          <div className={styles.temperature}>22°</div>
          <div className={styles.condition}>흐림</div>
        </div>
      </div>

      <div className={styles.weatherDetails}>
        <div className={styles.detailItem}>
          <span>체감온도</span>
          <div>24°</div>
        </div>
        <div className={styles.detailItem}>
          <span>습도</span>
          <div>68%</div>
        </div>
        <div className={styles.detailItem}>
          <span>풍속</span>
          <div>5m/s</div>
        </div>
      </div>
      <h1>Current Weather</h1>
      <ul>
        {currentWeather &&
          currentWeather.map((item, index) => (
            <li key={index}>
              <strong>{item.category}</strong>: {item.obsrValue} (Base: {item.baseDate} {item.baseTime})
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CurrentWeather;
