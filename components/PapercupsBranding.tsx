import React from 'react';
import {Flex, Link} from 'theme-ui';

const PapercupsBranding = () => {
  return (
    <Flex p={2} pt={0} sx={{justifyContent: 'center', alignItems: 'center'}}>
      <Link
        href="https://inhotel.io/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: 'gray',
          bg: '#f5f5f5',
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
