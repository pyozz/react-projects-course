import React, { useContext } from "react";
import { useQuery } from "react-query";
import { getPhotos } from "../../apis/gallery";
import { AppContext } from "../../context";
import * as S from "./style";

function Gallery() {
  const { searchValue } = useContext(AppContext);

  const { data: images } = useQuery(["images", searchValue], () =>
    getPhotos(searchValue)
  );

  return (
    <S.Gallery>
      {images?.results?.map((image) => {
        const url = image?.urls?.regular;
        return <S.GalleryImage key={image.id} src={url} />;
      })}
    </S.Gallery>
  );
}

export default Gallery;
