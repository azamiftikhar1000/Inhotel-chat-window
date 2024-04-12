/** @jsx jsx */
import {jsx} from 'theme-ui';

export const DiscardIcon = ({
  width,
  height,
  fill,
}: {
  width?: number;
  height?: number;
  fill?: string;
}) => {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      height={16} // {height || 16}
      width={16} //{width || 16}
      viewBox="0 0 48 48"
      //   sx={{
      //     // fill: 'black',
      //     border: {fill},
      //   }}
    >
      {/* <defs><linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#1D6FF2"></stop><stop offset="100%" stopColor="#1AC8FC"></stop></linearGradient></defs><g fill="none" fillRule="evenodd"><circle cx="20.5" cy="20" r="20" fill="url(#a)"></circle> */}

      <path
        d="M 10.500 14.309 L 1.500 22.740 10.500 31.248 L 19.500 39.756 19.803 34.843 L 20.107 29.929 23.553 30.465 C 25.449 30.759, 28.667 31.263, 30.703 31.583 C 36.254 32.458, 41.838 35.686, 44.035 39.290 L 45.993 42.500 45.996 38.837 C 45.998 36.651, 44.685 32.635, 42.737 28.872 C 38.796 21.258, 32.802 16.976, 25.043 16.230 L 20.096 15.755 19.798 10.816 L 19.500 5.877 10.500 14.309"
        fill={fill}
      ></path>
    </svg>
  );
};

export default DiscardIcon;
