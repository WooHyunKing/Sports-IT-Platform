import {
  faAngleLeft,
  faArrowLeft,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  height: 7%;
  padding: 15px 12px;
`;

export const IconArea = styled.div`
  width: 5%;
`;

export const TitleArea = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderLeftIcon = styled(FontAwesomeIcon).attrs({
  icon: faChevronLeft,
})`
  width: 18px;
  height: 23px;
  cursor: pointer;
`;

export const HeaderTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
  padding-right: 2%;
`;

export const HeaderRightIcon = styled.img``;
