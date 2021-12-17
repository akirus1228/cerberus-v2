import React from 'react';

import { CustomSvg } from '../index';
import { SvgProps } from '../../../core/interfaces/svg';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <CustomSvg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.5 14.2891C9.66406 14.2891 9.8125 14.2188 9.92969 14.0938L15.8516 7.85938C15.9531 7.75781 16.0156 7.63281 16.0156 7.47656C16.0156 7.17188 15.7812 6.9375 15.4766 6.9375C15.3359 6.9375 15.1875 6.99219 15.0859 7.09375L9.50781 12.9688L3.91406 7.09375C3.82031 6.99219 3.67969 6.9375 3.53125 6.9375C3.22656 6.9375 2.99219 7.17188 2.99219 7.47656C2.99219 7.63281 3.05469 7.75781 3.15625 7.86719L9.07812 14.1016C9.20312 14.2188 9.33594 14.2891 9.5 14.2891Z"/>
    </CustomSvg>
  );
};

export default Icon;
