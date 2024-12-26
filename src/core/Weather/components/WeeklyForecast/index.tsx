'use client';

import { Cloud } from 'lucide-react';
import React from 'react';

import styles from './styles.module.css';

const WeeklyForecast = () => {
  const days = ['월', '화', '수', '목', '금'];

  return (
    <div className={styles.weeklyContainer}>
      <h3 className={styles.weeklyHeader}>주간 날씨</h3>
      <div className={styles.daysList}>
        {days.map((day, index) => (
          <div key={index} className={styles.dayItem}>
            <div className={styles.dayRow}>
              <div>{day}요일</div>
              <Cloud size={20} className={styles.weatherIcon} />
            </div>
            <div className={styles.temps}>
              <span className={styles.highTemp}>22°</span>
              <span>/</span>
              <span className={styles.lowTemp}>15°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyForecast;
