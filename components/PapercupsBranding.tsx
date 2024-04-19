import React from 'react';
import {Flex, Link} from 'theme-ui';
import MailIcon from './MailIcon';

const PapercupsBranding = ({
  isMailIconClicked,
}: {
  isMailIconClicked: boolean;
}) => {
  // console.log("MailIcon: ", isMailIconClicked, "Type: ", typeof isMailIconClicked);
  return (
    <Flex p={2} pt={0} sx={{justifyContent: 'center', alignItems: 'center'}}>
      <Link
        href="https://inhotel.io/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: 'gray',
          // bg: isMailIconClicked ? 'rgba(233, 233, 233, 0.7)' : '#fff',
          bg: 'rgb(239, 239, 239)',
          opacity: 0.8,
          transition: '0.2s',
          '&:hover': {opacity: 1},
        }}
      >
        Powered by Inhotel.io
      </Link>
    </Flex>
  );
};

export default PapercupsBranding;
