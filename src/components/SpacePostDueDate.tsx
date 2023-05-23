import React, { useMemo, useRef } from "react";
import styled from "styled-components";
import PostTitle from "./PostTitle";

interface ISpacePostDueDate {
  dueDate: string;
  today: string;
  handlerSetDueDate: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function SpacePostDueDate({ dueDate, handlerSetDueDate, today }: ISpacePostDueDate) {
  const dateRef = useRef<HTMLInputElement>(null);
  const handlerOpenCalendar = () => {
    if (dateRef.current === null) return;

    dateRef.current.showPicker();
  };

  const dateText = useMemo(() => {
    const d = new Date(dueDate);
    const weekday = ["일", "월", "화", "수", "목", "금", "토"];
    return `${dueDate.replaceAll("-", ".")} (${weekday[d.getDay()]})`;
  }, [dueDate]);

  return (
    <Wrapper>
      <PostTitle text="기획 모집 마감일" require={true} />
      <DateButton onClick={handlerOpenCalendar}>
        <DateInput ref={dateRef} type="date" onChange={handlerSetDueDate} min={today} />
        {dateText}
      </DateButton>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const DateButton = styled.button`
  margin-top: 8px;
  padding: 4px 16px;
  width: 197px;
  height: 40px;
  background: #fafafa;
  border: 0.7px solid #c5c5c5;
`;

const DateInput = styled.input`
  visibility: hidden;
  width: 0;
  padding: 0;
  border-width: 0;
`;

export default SpacePostDueDate;
