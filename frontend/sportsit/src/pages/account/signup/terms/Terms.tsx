import React from "react";
import styled from "styled-components";
import { Container } from "../../../../Components/container/container";
import GoBackHeader from "../../../../Components/header/GoBackHeader";
import NavBar from "../../../../Components/navbar/NavBar";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  padding-left: 18px;
  padding-top: 20%;
`;

const Text = styled.span`
  font-weight: 600;
  font-size: 30px;
`;

const TermArea = styled.div`
  height: 35%;
  padding-left: 18px;
`;

const TotalAgree = styled.div`
  display: flex;
  align-items: center;
`;

const TotalAgreeText = styled.span`
  font-size: 20px;
`;

const Term = styled.div`
  display: flex;
  align-items: center;
`;

const TermText = styled.span`
  font-size: 18px;
`;

const Terms = () => {
  return (
    <Container>
      <GoBackHeader />
      <TextArea>
        <Text>서비스 이용약관에</Text>
        <Text>동의해주세요.</Text>
      </TextArea>
      <TermArea>
        <TotalAgree>
          <AiFillCheckCircle size="22px" />
          <TotalAgreeText>전체 약관에 동의합니다.</TotalAgreeText>
        </TotalAgree>
        <Term>
          <AiOutlineCheckCircle />
          <TermText>스포츠잇 이용약관(필수)</TermText>
        </Term>
        <Term>
          <AiOutlineCheckCircle />
          <TermText>개인정보 처리방침(필수)</TermText>
        </Term>
        <Term>
          <AiOutlineCheckCircle />
          <TermText>마케팅 수신 동의(선택)</TermText>
        </Term>
      </TermArea>
      <NavBar active={true} />
    </Container>
  );
};

export default Terms;
