/** @jsx jsx */
import {jsx} from 'theme-ui';

export const PhoneIcon = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 100000 100000"
      sx={{
        height: '17px',
        width: '17px',
      }}
    >
      <defs>
        <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1D6FF2"></stop>
          <stop offset="100%" stopColor="#1AC8FC"></stop>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle cx="20.5" cy="20" r="20" fill="url(#a)"></circle>

        <path
          d="M27265 42120c0,0 16316,3493 11110,-10193 -5203,-13687 -7047,-29008 -22014,-18415 -29152,20633 49591,99179 70145,70143 10592,-14965 -4729,-16810 -18416,-22014 -13686,-5204 -10193,11112 -10193,11112l-30632 -30633z"
          fill="#9a9b9b"
        >
          {' '}
        </path>
      </g>
    </svg>
  );
};

export default PhoneIcon;
