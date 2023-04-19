import styled, { css } from 'styled-components';

export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transform: translate3d(100%, 0, 0);
  transition: transform 300ms ease-in-out;

  ${({ isSidebarOpen }) =>
    isSidebarOpen &&
    css`
      transform: translate3d(0, 0, 0);
    `}
`;

export const SidebarCenter = styled.div`
  height: 100%;
  padding: 64px 32px;
`;

export const closeButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  font-size: 32px;
  border: none;
  background-color: transparent;
  outline: none;
`;

export const Sublink = styled.div`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Label = styled.h2`
  text-transform: capitalize;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
