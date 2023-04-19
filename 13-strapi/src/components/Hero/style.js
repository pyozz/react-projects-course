import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100% - 5rem);
`;

export const HeroCenter = styled.div`
  width: 90vw;
  max-width: 1190px;
`;

export const Title = styled.strong`
  display: block;
  margin-bottom: 20px;
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.25;
`;

export const Content = styled.p`
  color: #fff;
  letter-spacing: 1px;
`;
