import React from "react";
import styled from "styled-components";
import { Container } from "../../../Components/container/container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { roleAtom } from "../../../atoms/roleAtom";
import GoBackHeader from "../../../Components/header/GoBackHeader";
import { IRole } from "../../../interfaces/roleInterface";
import * as S from "./RoleSelectStyles";

const RoleSelect = () => {
  const [role, setRole] = useRecoilState<boolean>(roleAtom);
  return (
    <Container>
      <GoBackHeader />
      <S.QuestionArea>
        <S.QuestionText>스포이터 이신가요?</S.QuestionText>
        <S.QuestionText>스포티 이신가요?</S.QuestionText>
      </S.QuestionArea>
      <S.SelectArea>
        <S.SpoitorButton
          onClick={() => setRole((current) => !current)}
          spoitor={role}
        >
          <S.SporitorSelectIcon spoitor={role} />
          <S.RoleArea>
            <S.Role>스포이터</S.Role>
            <S.RoleDescription>
              대회를 개최하고 관리하고 싶어요.
            </S.RoleDescription>
          </S.RoleArea>
        </S.SpoitorButton>
        <S.SportyButton
          onClick={() => setRole((current) => !current)}
          spoitor={role}
        >
          <S.SportySelectIcon spoitor={role} />
          <S.RoleArea>
            <S.Role>스포티</S.Role>
            <S.RoleDescription>
              대회에 참여하고 정보를 얻고 싶어요.
            </S.RoleDescription>
          </S.RoleArea>
        </S.SportyButton>
      </S.SelectArea>
      <S.NavArea>
        <S.NavText>다음</S.NavText>
      </S.NavArea>
    </Container>
  );
};

export default RoleSelect;
