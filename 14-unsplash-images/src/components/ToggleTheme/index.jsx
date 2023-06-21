import React from "react";
import { useContext } from "react";
import * as S from "./style";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { AppContext } from "../../context";

function ToggleTheme() {
  const { isDarkMode, toggleDarkMode } = useContext(AppContext);

  return (
    <S.ToggleContainer>
      <S.ToggleButton onClick={() => toggleDarkMode(!isDarkMode)}>
        {isDarkMode ? <BsMoonFill /> : <BsSunFill />}
      </S.ToggleButton>
    </S.ToggleContainer>
  );
}

export default ToggleTheme;
