import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindAccount from "./pages/account/FindAccount";
import Guide from "./pages/account/Guide";
import Login from "./pages/account/Login";
import WriteInfo from "./pages/account/WriteInfo";
import Competition from "./pages/competition/Competition";
import CompetitionApply from "./pages/competition/CompetitionApply";
import CompetitionInfo from "./pages/competition/CompetitionInfo";
import FeelIt from "./pages/feelit/FeelIt";
import Main from "./pages/Main";
import MyPage from "./pages/mypage/MyPage";
import Network from "./pages/network/Network";
import OfficialDocument from "./pages/official-document/OfficialDocument";
import PlayerRegister from "./pages/player-register/PlayerRegister";
import SignUp from "./pages/account/SignUp";
import SignUpSuccess from "./pages/account/SignUpSuccess";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signup-success" element={<SignUpSuccess />}></Route>
          <Route path="/guide" element={<Guide />}></Route>
          <Route path="/find-account" element={<FindAccount />}></Route>
          <Route path="/competition" element={<Competition />}>
            <Route path=":cpId" element={<CompetitionInfo />}></Route>
            <Route path=":cpId/apply" element={<CompetitionApply />}></Route>
          </Route>
          <Route path="/network" element={<Network />}></Route>
          <Route path="/feel-it" element={<FeelIt />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/write-info" element={<WriteInfo />}></Route>
          <Route path="/player-register" element={<PlayerRegister />}></Route>
          <Route
            path="/official-document"
            element={<OfficialDocument />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
