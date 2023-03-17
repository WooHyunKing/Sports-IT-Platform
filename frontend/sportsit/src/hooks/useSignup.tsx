import React from "react";
import { useMutation } from "react-query";
import { signupPost } from "../api/account/accountApi";
import { ISignupProps } from "../interfaces/accountInterface";

const useSignup = () => {
  const { mutate } = useMutation("loginPost", signupPost, {
    onSuccess: () => console.log("success!"),
  });
  return <div></div>;
};

export default useSignup;
