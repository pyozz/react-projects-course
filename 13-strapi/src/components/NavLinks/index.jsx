import React, { useContext } from 'react';
import sublinks from '../../data';
import * as S from './style';
import { AppContext } from '../../context';

function index() {
  const { setPageId } = useContext(AppContext);

  const hideSubmenuHandler = (e) => {
    if (e.target.nodeName !== 'BUTTON') setPageId(null);
  };

  return (
    <S.NavLinks onMouseOver={hideSubmenuHandler}>
      {sublinks.map((sublink) => {
        const { pageId, page } = sublink;

        return (
          <S.SubLink
            key={pageId}
            type="button"
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </S.SubLink>
        );
      })}
    </S.NavLinks>
  );
}

export default index;
