'use client';

import React from 'react';

import styles from './styles.module.css';
import CurrentWeather from '../CurrentWeather';
import HourlyForecast from '../HourlyForecast';
import WeeklyForecast from '../WeeklyForecast';


const WeatherSection = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.weatherContent}>
        <div className={styles.currentHourlyContent}>
          <CurrentWeather />
          <HourlyForecast />
        </div>
        <WeeklyForecast />
      </div>
    </main>
  );
};

export default WeatherSection;
