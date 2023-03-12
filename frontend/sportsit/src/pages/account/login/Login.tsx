import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as S from "./LoginStyles";

const Login = () => {
  return (
    <S.LoginContainer>
      <S.ImageArea>
        <S.LogoImage src={require("../../../imgs/logo/AppLogo.png")} />
      </S.ImageArea>
      <S.Form>
        <S.Input placeholder="아이디(이메일)"></S.Input>
        <S.Input placeholder="비밀번호"></S.Input>
        <S.SubmitButton>로그인</S.SubmitButton>
      </S.Form>
      <S.AccountPanel>
        <Link to="/role-select">
          <S.AccountPanelText>회원가입</S.AccountPanelText>
        </Link>
        <Link to="/">
          <S.AccountPanelText>아이디/비밀번호 찾기</S.AccountPanelText>
        </Link>
      </S.AccountPanel>
      <S.EasyLoginArea>
        <Link to="/">
          <S.EasyLoginImage
            src={require("../../../imgs/logo/KakaoLoginLogo.png")}
          />
        </Link>
        <Link to="/">
          <S.EasyLoginImage
            src={require("../../../imgs/logo/GoogleLoginLogo.png")}
          />
        </Link>
      </S.EasyLoginArea>
    </S.LoginContainer>
  );
};

export default Login;
