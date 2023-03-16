import styled from "styled-components";
import { Container } from "../../../Components/container/container";

export const LoginContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageArea = styled.div`
  padding: 100px;
`;

export const LogoImage = styled.img``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 327px;
`;

export const Input = styled.input`
  height: 50px;
  width: 100%;
  padding-left: 12px;
  background-color: #f9f9fa;
  border-radius: 12px;
  margin-bottom: 10px;
  color: #aeaeae;
`;

export const SubmitButton = styled.button`
  height: 60px;
  width: 100%;
  padding: 5px 15px;
  background-color: #222428;
  border-radius: 12px;
  margin: 7px 0;
  cursor: pointer;
  color: white;
`;

export const AccountPanel = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 50px 0;
  width: 100%;
`;

export const AccountPanelText = styled.span`
  margin: 0 10px;
`;

export const EasyLoginArea = styled.div``;

export const EasyLoginImage = styled.img`
  margin: 0 10px;
`;
