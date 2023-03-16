import { Container } from "../../../Components/container/container";
import { useRecoilState } from "recoil";
import { roleAtom } from "../../../atoms/roleAtom";
import GoBackHeader from "../../../Components/header/GoBackHeader";
import * as S from "./RoleSelectStyles";
import { Link } from "react-router-dom";
import NavBar from "../../../Components/navbar/NavBar";

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
      <Link to="/event-select">
        <NavBar active={true} />
      </Link>
    </Container>
  );
};

export default RoleSelect;
