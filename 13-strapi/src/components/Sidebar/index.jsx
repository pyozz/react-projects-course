import React, { useContext } from 'react';
import * as S from './style';
import sublinks from '../../data';
import { IoClose } from 'react-icons/io5';
import { AppContext } from '../../context';

function index() {
  const { isSidebarOpen, closeSidebar } = useContext(AppContext);

  return (
    <S.Sidebar isSidebarOpen={isSidebarOpen}>
      <S.SidebarCenter>
        <S.closeButton type="button" onClick={closeSidebar}>
          <IoClose />
        </S.closeButton>

        {sublinks.map((sublink) => {
          const { page, links } = sublink;

          return (
            <S.Sublink key={page}>
              <S.Label>{page}</S.Label>
              <S.Links>
                {links.map((link) => {
                  const { label, icon, url } = link;
                  return (
                    <a key={label} href={url}>
                      {icon}
                      {label}
                    </a>
                  );
                })}
              </S.Links>
            </S.Sublink>
          );
        })}
      </S.SidebarCenter>
    </S.Sidebar>
  );
}

export default index;
