import React, { useContext, useRef } from 'react';
import { AppContext } from '../../context';
import sublinks from '../../data';
import * as S from './style';

function index() {
  const { pageId, setPageId } = useContext(AppContext);
  const currentPage = sublinks.find((sublink) => sublink.pageId === pageId);
  const submenuRef = useRef(null);

  const hideSubmenuHandler = (e) => {
    const { clientX, clientY } = e;
    const { right, bottom, left } = submenuRef.current.getBoundingClientRect();

    if (clientX < left || clientX > right || clientY > bottom) setPageId(null);
  };

  return (
    <S.Submenu
      onMouseLeave={hideSubmenuHandler}
      currentPage={currentPage}
      ref={submenuRef}
    >
      <S.SubmenuCenter>
        <S.Title>{currentPage?.page}</S.Title>

        <S.SubmenuLinks
          style={{
            gridTemplateColumns:
              currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
          }}
        >
          {currentPage?.links?.map((link) => {
            const { label, icon, url } = link;

            return (
              <a key={label} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </S.SubmenuLinks>
      </S.SubmenuCenter>
    </S.Submenu>
  );
}

export default index;
