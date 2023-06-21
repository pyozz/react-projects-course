import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import * as S from "./style";

function SearchForm() {
  const [input, setInput] = useState("");
  const { setSearchValue } = useContext(AppContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchValue(input);
  };

  return (
    <S.FormContainer>
      <S.Title>unsplash images</S.Title>

      <form onSubmit={submitHandler}>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">검색</button>
      </form>
    </S.FormContainer>
  );
}

export default SearchForm;
