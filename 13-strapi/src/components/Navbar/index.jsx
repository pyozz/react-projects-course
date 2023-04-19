import React from 'react';
import * as S from './style';
import { AiOutlineMenu } from 'react-icons/ai';

function index() {
  return (
    <S.Nav>
      <S.NavCenter>
        <S.Title>strapi</S.Title>
        <S.ToggleSidebarBtn type="button">
          <AiOutlineMenu />
        </S.ToggleSidebarBtn>
      </S.NavCenter>
    </S.Nav>
  );
}

export default index;
