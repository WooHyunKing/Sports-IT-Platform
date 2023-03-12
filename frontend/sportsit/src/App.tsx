import { RecoilRoot } from "recoil";
import styled from "styled-components";
import Router from "./Router";

const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <RecoilRoot>
      <Warpper>
        <Router />
      </Warpper>
    </RecoilRoot>
  );
}

export default App;
