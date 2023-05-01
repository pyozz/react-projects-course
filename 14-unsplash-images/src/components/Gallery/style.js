import styled from 'styled-components'

export const Gallery = styled.div`
  width: 70vw;
  max-width: 1140px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const GalleryImage = styled.img`
  width: 100%;
  height: 200px;
`
