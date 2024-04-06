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
      height={32} // {height || 16}
      width={32} //{width || 16}
      viewBox="0 0 32 32"
      sx={{
        fill: 'white',
        border: fill,
      }}
    >
      {/* <defs><linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#1D6FF2"></stop><stop offset="100%" stopColor="#1AC8FC"></stop></linearGradient></defs><g fill="none" fillRule="evenodd"><circle cx="20.5" cy="20" r="20" fill="url(#a)"></circle> */}

      <path
        d="M14.389 7.956v4.374l1.056 0.010c7.335 0.071 11.466 3.333 12.543 9.944-4.029-4.661-8.675-4.663-12.532-4.664h-1.067v4.337l-9.884-7.001 9.884-7zM15.456 5.893l-12.795 9.063 12.795 9.063v-5.332c5.121 0.002 9.869 0.26 13.884 7.42 0-4.547-0.751-14.706-13.884-14.833v-5.381z"
        fill="white"
      >
        {' '}
      </path>
    </svg>
  );
};

export default DiscardIcon;
