import React, { useEffect, useState } from 'react';

interface CircularProgressProps {
  value: number;
  min: number;
  max: number;
  size: number;
  strokeWidth: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ value, min, max, size, strokeWidth }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (value - min) / (max - min);
  const offset = circumference * (1 - progress);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 20);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="circular-progress">
      <circle
        className="background-circle"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        fill="none"
        stroke="#e0e0e0"
        style={{
            borderRadius: '100px',
        }}
      />
      <circle
        className="progress-circle"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        fill="none"
        stroke="#007bff"
        strokeDasharray={circumference}
        strokeDashoffset={isLoading ? circumference : offset}
        style={{
          transition: isLoading ? 'none' : 'stroke-dashoffset 1s ease-in-out',
          borderRadius: '100px',
        }}
      />
      <text x="50%" y="50%" className="progress-label" alignmentBaseline="middle" textAnchor="middle" fill="#000">
        {value}
      </text>
    </svg>
  );
};

export default CircularProgress;
