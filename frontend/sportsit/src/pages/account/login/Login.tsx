import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { loginPost } from "../../../api/account/accountApi";
import { ILoginProps } from "../../../interfaces/accountInterface";
import * as S from "./LoginStyles";

const Login = () => {
  const { register, handleSubmit, formState } = useForm<ILoginProps>();
  const navigate = useNavigate();

  const { mutate } = useMutation("loginPost", loginPost, {
    onSuccess: (res) => {
      console.log("success!!", res);
      navigate("/");
    },
    onError: (res) => console.log("Error!!", res),
    onSettled: (res) => console.log("Post is called !", res),
  });

  const onValid = (data: ILoginProps) => {
    mutate({
      loginId: data.loginId,
      pw: data.pw,
    });
  };

  const onInvalid = () => {
    if (formState.errors.loginId) {
      alert(`${formState.errors?.loginId?.message}`);
    } else if (formState.errors.pw) {
      alert(`${formState.errors?.pw?.message}`);
    }
  };

  return (
    <S.LoginContainer>
      <S.ImageArea>
        <S.LogoImage src={require("../../../imgs/logo/AppLogo.png")} />
      </S.ImageArea>
      <S.Form onSubmit={handleSubmit(onValid, onInvalid)}>
        <S.Input
          {...register("loginId", {
            required: "아이디는 필수 입력사항 입니다.",
          })}
          placeholder="아이디(이메일)"
        ></S.Input>
        <S.Input
          {...register("pw", {
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
