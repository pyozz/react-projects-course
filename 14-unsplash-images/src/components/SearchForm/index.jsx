import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import * as S from "./style";

function SearchForm() {
  const { setSearchValue } = useContext(AppContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    setSearchValue(searchValue);
  };

  return (
    <S.FormContainer>
      <S.Title>unsplash images</S.Title>

      <form onSubmit={submitHandler}>
        <input type="text" name="search" />
        <button type="submit">검색</button>
      </form>
    </S.FormContainer>
  );
}

export default SearchForm;
