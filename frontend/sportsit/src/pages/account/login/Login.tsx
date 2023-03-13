import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as S from "./LoginStyles";

const Login = () => {
  const { register, watch, handleSubmit, formState } = useForm();

  const onValid = () => {
    console.log("Valid !");
  };

  const onInvalid = () => {
    if (formState.errors.id) {
      alert(`${formState.errors?.id?.message}`);
    }
    if (formState.errors.password) {
      alert(`${formState.errors?.password?.message}`);
    }
  };

  // console.log(watch());
  // console.log(formState.errors);

  return (
    <S.LoginContainer>
      <S.ImageArea>
        <S.LogoImage src={require("../../../imgs/logo/AppLogo.png")} />
      </S.ImageArea>
      <S.Form onSubmit={handleSubmit(onValid, onInvalid)}>
        <S.Input
          {...register("id", { required: "아이디는 필수 입력사항 입니다." })}
          placeholder="아이디(이메일)"
        ></S.Input>
        <S.Input
          {...register("password", {
            required: "비밀번호는 필수 입력사항 입니다.",
          })}
          type="password"
          placeholder="비밀번호"
        ></S.Input>
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
