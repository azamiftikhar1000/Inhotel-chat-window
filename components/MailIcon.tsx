/** @jsx jsx */
import {jsx} from 'theme-ui';
import Tooltip from '@mui/material/Tooltip';
export const MailIcon = ({
  width,
  height,
  onClick,
}: {
  width?: number;
  height?: number;
  onClick?: (e: any) => void;
}) => {
  return (
    <Tooltip title="Contact Us" placement="bottom">
      <svg
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        sx={{
          height: '2.5em',
          width: '2.5em',
        }}
        onClick={onClick}
      >
        {/* <defs><linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#1D6FF2"></stop><stop offset="100%" stopColor="#1AC8FC"></stop></linearGradient></defs><g fill="none" fillRule="evenodd"><circle cx="20.5" cy="20" r="20" fill="url(#a)"></circle> */}

        <path
          fill="#9a9b9b"
          fillRule="evenodd"
          d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Zm2 1.18V16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8.18l-8 5-8-5ZM18.113 7H5.887L12 10.82 18.113 7Z"
        ></path>
        {/* </g> */}
      </svg>
    </Tooltip>
  );
};

export default MailIcon;
