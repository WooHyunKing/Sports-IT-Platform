import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { eventAtom } from "../../atoms/eventAtom";
import { IEvent } from "../../interfaces/eventInterface";
import {
  EventSelectButtonProps,
  SelectProps,
} from "../../interfaces/selectInterface";

import * as S from "./EventSelectButtonStyles";

const EventSelectButton = ({
  text,
  active,
  setCount,
}: EventSelectButtonProps) => {
  const [events, setEvents] = useRecoilState<IEvent>(eventAtom);
  const onClickEvent = (eventName: string) => {
    setEvents((events) => {
      const eventState = events[eventName];
      return {
        ...events,
        [eventName]: !eventState,
      };
    });
  };
  return (
    <S.SelectButton
      onClick={() => {
        if (active) {
          setCount((count) => count - 1);
        } else {
          setCount((count) => (count += 1));
        }
        onClickEvent(text);
      }}
      active={active}
    >
      <S.SelectText active={active}>{text}</S.SelectText>
    </S.SelectButton>
  );
};

export default EventSelectButton;
