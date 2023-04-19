import React, { useContext } from 'react';
import * as S from './style';
import { AiOutlineMenu } from 'react-icons/ai';
import { AppContext } from '../../context';
import { NavLinks } from '..';

function index() {
  const { openSidebar } = useContext(AppContext);

  return (
    <S.Nav>
      <S.NavCenter>
        <S.Title>strapi</S.Title>
        <S.ToggleSidebarBtn type="button" onClick={openSidebar}>
          <AiOutlineMenu />
        </S.ToggleSidebarBtn>

        <NavLinks />
      </S.NavCenter>
    </S.Nav>
  );
}

export default index;
