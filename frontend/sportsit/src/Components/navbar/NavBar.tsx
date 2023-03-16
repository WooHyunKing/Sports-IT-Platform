import React from "react";
import styled from "styled-components";
import { NavProps } from "../../interfaces/navInterface";
import * as S from "./NavBarStyles";

const NavBar = ({ active }: NavProps) => {
  return (
    <S.NavArea disabled={!active} active={active}>
      <S.NavText active={active}>다음</S.NavText>
    </S.NavArea>
  );
};

export default NavBar;
