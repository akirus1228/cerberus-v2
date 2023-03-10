import React from 'react';

import { CustomSvg } from '../index';
import { SvgProps } from '../../../core/interfaces/svg';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <CustomSvg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M30.3571 40.59C37.602 38.393 42.8571 31.858 42.8571 24.1379C42.8571 14.6158 34.8622 6.89655 25 6.89655C15.1378 6.89655 7.14286 14.6158 7.14286 24.1379C7.14286 31.858 12.398 38.393 19.6429 40.59V50H0V43.1034H9.53358C3.72739 38.6833 0 31.8309 0 24.1379C0 10.8069 11.1929 0 25 0C38.8071 0 50 10.8069 50 24.1379C50 31.8309 46.2726 38.6833 40.4664 43.1034H50V50H30.3571V40.59Z"/>
    </CustomSvg>
  );
};

export default Icon;
