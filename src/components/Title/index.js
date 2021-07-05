import React from 'react';

import { TitleContainer, TitleMessage } from './style';

function Title({ children, name }) {
  return (
    <TitleContainer>
      {children}
      <TitleMessage>{name}</TitleMessage>{' '}
    </TitleContainer>
  );
}

export default Title;
