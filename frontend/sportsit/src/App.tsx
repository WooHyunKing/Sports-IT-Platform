import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";

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
      <ReactQueryDevtools />
    </RecoilRoot>
  );
}

export default App;
