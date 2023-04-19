import React from 'react';
import sublinks from '../../data';
import * as S from './style';

function index() {
  return (
    <S.NavLinks>
      {sublinks.map((sublink) => {
        const { page, links } = sublink;

        return (
          <S.SubLink key={page} type="button">
            {page}
          </S.SubLink>
        );
      })}
    </S.NavLinks>
  );
}

export default index;
