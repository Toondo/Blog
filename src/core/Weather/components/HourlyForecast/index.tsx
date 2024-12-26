'use client';

import { Cloud } from 'lucide-react';
import React from 'react';

import styles from './styles.module.css';

const HourlyForecast = () => {
  const hours = [3, 6, 9, 12, 15, 18, 21, 24];
  const temperatures = Array(8).fill(21);

  return (
    <div className={styles.hourlyContainer}>
      <h3 className={styles.timeHeader}>시간별 날씨</h3>
      <div className={styles.hourlyGrid}>
        {hours.map((hour, index) => (
          <div key={index} className={styles.hourlyItem}>
            <div className={styles.timeText}>{hour}:00</div>
            <Cloud size={24} className={styles.weatherIcon} />
            <div className={styles.temperature}>{temperatures[index]}°</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
