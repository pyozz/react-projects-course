import styled, { css } from 'styled-components';

export const Submenu = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    position: fixed;
    top: 80px;
    left: 50%;
    display: block;
    width: 90vw;
    max-width: 1190px;
    opacity: 0;
    visibility: hidden;
    z-index: -1;
    transform: translateX(-50%) translate3d(0, -6px, 0);
    transition: transform 400ms ease-in-out;

    ${({ currentPage }) =>
      currentPage &&
      css`
        opacity: 1;
        visibility: visible;
        z-index: 10;
        transform: translateX(-50%) translate3d(0, 0, 0);
      `}
  }
`;

export const SubmenuCenter = styled.div`
  height: 110px;
  padding: 32px;
  margin: 0 auto;
  background-color: #fff;
`;

export const Title = styled.h5`
  margin-bottom: 14px;
  font-size: 20px;
  text-transform: capitalize;
`;

export const SubmenuLinks = styled.div`
  display: grid;
  gap: 10px;
`;
