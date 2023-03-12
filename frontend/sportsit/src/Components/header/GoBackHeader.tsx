import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  width: 375px;
  height: 5%;
  padding: 10px;
`;

const HeaderLeftIcon = styled(FontAwesomeIcon).attrs({
  icon: faChevronLeft,
})`
  width: 20px;
  height: 25px;
  cursor: pointer;
`;

const HeaderTitle = styled.h1``;

const HeaderRightIcon = styled.img``;

const GoBackHeader = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <HeaderLeftIcon onClick={() => navigate(-1)} />
      <HeaderTitle></HeaderTitle>
      <HeaderRightIcon />
    </Header>
  );
};

export default GoBackHeader;
