import React from 'react';
import Svg, { Path, Circle, Rect } from 'react-native-svg';

interface IconProps {
  color?: string;
  size?: number;
}

export const HomeIcon = ({ color = '#6B7280', size = 20 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20">
    <Path
      d="M3 8.5L10 3l7 5.5V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8.5z"
      stroke={color} strokeWidth="1.4" strokeLinejoin="round"
      fill={color} fillOpacity="0.1"
    />
    <Rect x="7" y="11" width="6" height="7" rx="1" stroke={color} strokeWidth="1.3" fill="white" />
  </Svg>
);

export const GrowthIcon = ({ color = '#6B7280', size = 20 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20">
    <Path
      d="M3 17l4-6 3.5 2.5L14 7l3 4.5"
      stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
    <Circle cx="14" cy="7" r="2" stroke={color} strokeWidth="1.3" fill="none" />
  </Svg>
);

export const ExploreIcon = ({ color = '#6B7280', size = 20 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20">
    <Circle cx="10" cy="10" r="7" stroke={color} strokeWidth="1.4" fill="none" />
    <Path
      d="M13 7l-2 5-5 2 2-5z"
      stroke={color} strokeWidth="1.3" strokeLinejoin="round"
      fill={color} fillOpacity="0.15"
    />
  </Svg>
);

export const ProgressBarIcon = ({ color = '#6B7280', size = 20 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20">
    <Path
      d="M3 16l3.5-5.5 3 2 3.5-6.5 3 4.5"
      stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
  </Svg>
);

export const ProfileIcon = ({ color = '#6B7280', size = 20 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20">
    <Circle cx="10" cy="7" r="3.5" stroke={color} strokeWidth="1.4" fill="none" />
    <Path
      d="M3.5 18c0-4 2.9-6 6.5-6s6.5 2 6.5 6"
      stroke={color} strokeWidth="1.4" strokeLinecap="round" fill="none"
    />
  </Svg>
);

export const BackIcon = ({ color = '#111827', size = 20 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20">
    <Path
      d="M12 5l-6 5 6 5"
      stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
  </Svg>
);

export const CheckIcon = ({ color = '#fff', size = 20 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20">
    <Path
      d="M4 10l5 5 7-8"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
  </Svg>
);

export const LockIcon = ({ color = '#9CA3AF', size = 20 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20">
    <Rect x="5" y="9" width="10" height="8" rx="2" stroke={color} strokeWidth="1.3" fill="none" />
    <Path d="M7 9V7a3 3 0 0 1 6 0v2" stroke={color} strokeWidth="1.3" fill="none" />
  </Svg>
);

export const BellIcon = ({ color = '#002920', size = 20 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20">
    <Path
      d="M10 2a6 6 0 0 1 6 6v3l1.5 2.5H2.5L4 11V8a6 6 0 0 1 6-6z"
      stroke={color} strokeWidth="1.3" fill="none"
    />
    <Path d="M8 15.5a2 2 0 0 0 4 0" stroke={color} strokeWidth="1.3" fill="none" />
  </Svg>
);

export const ClockIcon = ({ color = '#002920', size = 20 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20">
    <Circle cx="10" cy="10" r="7" stroke={color} strokeWidth="1.3" fill="none" />
    <Path d="M10 6v4l2.5 1.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" fill="none" />
  </Svg>
);

export const StarIcon = ({ color = '#002920', size = 20 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20">
    <Path
      d="M10 2l2.4 5.1L18 8l-4 3.9 1 5.6L10 15l-5 2.5 1-5.6L2 8l5.6-.9z"
      stroke={color} strokeWidth="1.3" fill={color} fillOpacity="0.12"
    />
  </Svg>
);

export const CompassIcon = ({ size = 48 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 48 48">
    <Circle cx="24" cy="24" r="18" stroke="white" strokeWidth="1.5" fill="none" opacity={0.4} />
    <Circle cx="24" cy="24" r="4" fill="white" />
    <Path d="M24 6v6M24 36v6M6 24h6M36 24h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity={0.6} />
    <Path d="M18 18l12 12M30 18l-12 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity={0.3} />
  </Svg>
);
