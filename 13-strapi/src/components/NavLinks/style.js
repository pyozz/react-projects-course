import styled from 'styled-components';

export const NavLinks = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    height: 100%;
  }
`;

export const SubLink = styled.button`
  padding: 0 20px;
  color: #fff;
  font-size: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  text-transform: capitalize;
`;
