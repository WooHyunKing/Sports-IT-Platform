import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { eventAtom, eventCountAtom } from "../../../atoms/eventAtom";
import EventSelectButton from "../../../Components/button/EventSelectButton";
import { Container } from "../../../Components/container/container";
import GoBackHeader from "../../../Components/header/GoBackHeader";
import NavBar from "../../../Components/navbar/NavBar";
import { IEvent } from "../../../interfaces/eventInterface";
import * as S from "./EventSelectStyles";

const EventSelect = () => {
  const [events, setEvents] = useRecoilState<IEvent>(eventAtom);
  const [count, setCount] = useRecoilState(eventCountAtom);
  console.log(count);
  return (
    <Container>
      <GoBackHeader />
      <S.TextArea>
        <S.Text>관심있는 종목을</S.Text>
        <S.Text>선택해주세요.</S.Text>
      </S.TextArea>
      <S.SelectArea>
        {Object.keys(events).map((event, index) => (
          <EventSelectButton
            key={index}
            text={event}
            active={events[event]}
            setCount={setCount}
          ></EventSelectButton>
        ))}
      </S.SelectArea>
      <S.BottomArea></S.BottomArea>
      <Link to="/signup">
        <NavBar active={count >= 5 ? true : false} />
      </Link>
    </Container>
  );
};

export default EventSelect;
