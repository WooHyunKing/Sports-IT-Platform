import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  width: 375px;
  height: 5%;
  padding: 10px;
`;

export const HeaderLeftIcon = styled(FontAwesomeIcon).attrs({
  icon: faChevronLeft,
})`
  width: 20px;
  height: 25px;
  cursor: pointer;
`;

export const HeaderTitle = styled.h1``;

export const HeaderRightIcon = styled.img``;
