import React from 'react';

import { TitleContainer } from './style';

function Title({ children, name }) {
  return (
    <TitleContainer>
      {children}
      <span>{name}</span>{' '}
    </TitleContainer>
  );
}

export default Title;
