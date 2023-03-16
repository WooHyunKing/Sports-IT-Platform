import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as S from "./GoBackHeaderStyles";

const GoBackHeader = () => {
  const navigate = useNavigate();
  return (
    <S.Header>
      <S.HeaderLeftIcon onClick={() => navigate(-1)} />
      <S.HeaderTitle></S.HeaderTitle>
      <S.HeaderRightIcon />
    </S.Header>
  );
};

export default GoBackHeader;
