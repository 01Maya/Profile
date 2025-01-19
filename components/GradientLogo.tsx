import React from 'react';

interface GradientLogoProps {
  text: string;
  width: number;
  height: number;
}

const GradientLogo: React.FC<GradientLogoProps> = ({ text, width, height }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff00cc" />
          <stop offset="100%" stopColor="#3333ff" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="50" fill="white"/>
      <text
        x="50"
        y="50"
        dominantBaseline="central"
        textAnchor="middle"
        fill="url(#gradient)"
        fontSize="50"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        {text}
      </text>
    </svg>
  );
};

export default GradientLogo;

