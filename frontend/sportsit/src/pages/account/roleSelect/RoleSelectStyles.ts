import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { IRole } from "../../../interfaces/roleInterface";

export const QuestionArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  padding: 25% 0 0 20px;
`;

export const QuestionText = styled.span`
  font-size: 40px;
  font-weight: 40px;
  margin-bottom: 10px;
`;

export const SelectArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  height: 45%;
`;

export const SpoitorButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid;
  border-color: ${(props) =>
    props.role === "ROLE_INSTITUTION" ? "#212121" : "#EDEDED"};
  border-radius: 12px;
  width: 335px;
  height: 100px;
  margin-bottom: 5px;
  padding-left: 20px;
  cursor: pointer;
  background-color: #ffffff;
`;

export const SportyButton = styled(SpoitorButton)`
  border-color: ${(props) =>
    props.role === "ROLE_USER" ? "#212121" : "#EDEDED"};
`;

export const SporitorSelectIcon = styled(FontAwesomeIcon).attrs({
  icon: faCircleCheck,
})`
  color: ${(props) =>
    props.role === "ROLE_INSTITUTION" ? "#212121" : "#EDEDED"};
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

export const SportySelectIcon = styled(SporitorSelectIcon)`
  color: ${(props) => (props.role === "ROLE_USER" ? "#212121" : "#EDEDED")};
`;

export const RoleArea = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Role = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const RoleDescription = styled.span`
  font-size: 14px;
`;

export const NavArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  background-color: #212121;
`;

export const NavText = styled.span`
  color: #ffffff;
`;
