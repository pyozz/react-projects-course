import React from 'react';
import * as S from './style';

function index() {
  return (
    <S.HeroContainer>
      <S.HeroCenter>
        <S.Title>
          Manage Any Content
          <br />
          Anywhere
        </S.Title>
        <S.Content>
          Strapi is the leading open-source headless CMS. It’s 100% JavaScript
          and fully customizable.
        </S.Content>
      </S.HeroCenter>
    </S.HeroContainer>
  );
}

export default index;
