import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

export const NavCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  max-width: 1190px;
  height: 80px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: none;
`;

export const ToggleSidebarBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 4px;
  outline: none;
`;
