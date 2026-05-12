import { useState, useEffect } from 'react';
import { weddingConfig } from '../config/weddingConfig';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate?: number;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const weddingTime = targetDate || weddingConfig.wedding.date;
      const diff = weddingTime - now;

      if (diff > 0) {
        setTimeRemaining({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-header">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <polyline points="12 6 12 12 16 14" strokeWidth="2" />
        </svg>
        <h3>ម្សាឋា នូវមជ្ឈដ្ឋាន</h3>
      </div>

      <div className="countdown-grid">
        <div className="countdown-item">
          <div className="countdown-value">{String(timeRemaining.days).padStart(2, '0')}</div>
          <div className="countdown-label">ថ្ងៃ</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">{String(timeRemaining.hours).padStart(2, '0')}</div>
          <div className="countdown-label">ម៉ោង</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">{String(timeRemaining.minutes).padStart(2, '0')}</div>
          <div className="countdown-label">នាទី</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">{String(timeRemaining.seconds).padStart(2, '0')}</div>
          <div className="countdown-label">វិនាទី</div>
        </div>
      </div>

      <button className="calendar-button">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <polyline points="16 2 16 6 8 6 8 2" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        ត្រូវបានឧក្រិដ្ឋកម្មលើកនេះ
      </button>
    </div>
  );
}
