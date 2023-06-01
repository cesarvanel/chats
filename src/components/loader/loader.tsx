import React, { ReactNode } from 'react';

import './loader.scss'

/* eslint-disable-next-line */
export interface LoaderProps {
  children: ReactNode;
}

export const Loader = () => {
  return (
    <div className='Loader'>
      <div className='loadingio-spinner-spinner-r9k6e1jipuq'>
        <div className='ldio-fm6fpzc59bu'>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export default Loader;