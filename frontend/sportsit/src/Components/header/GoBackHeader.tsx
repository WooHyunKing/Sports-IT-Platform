import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IGoBackHeader } from "../../interfaces/headerInterface";
import * as S from "./GoBackHeaderStyles";

const GoBackHeader = ({ title }: IGoBackHeader) => {
  const navigate = useNavigate();
  return (
    <S.Header>
      <S.IconArea>
        <S.HeaderLeftIcon onClick={() => navigate(-1)} />
      </S.IconArea>
      <S.TitleArea>
        <S.HeaderTitle>{title}</S.HeaderTitle>
      </S.TitleArea>
      <S.IconArea>
        <S.HeaderRightIcon />
      </S.IconArea>
    </S.Header>
  );
};

export default GoBackHeader;
