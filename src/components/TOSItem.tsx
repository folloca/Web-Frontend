import styled from "styled-components";
import LargeRoundCheckBox from "./LargeRoundCheckBox";
import React from "react";
const TOSItem = ({
  isNecessary,
  contents,
  isToggle = false,
  toggleContents,
}: {
  isNecessary: boolean;
  contents: string;
  isToggle?: boolean;
  toggleContents?: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Wrapper>
      <div className={"check_box"}>
        <LargeRoundCheckBox />
        <span className={"small_text"}>
          {isNecessary ? <span className={"green_text"}>(필수)</span> : <span>(선택)</span>} {contents}
        </span>
        {isToggle && (
          <span className={"gray_text"} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "접기" : "보기"}
          </span>
        )}
        {isOpen && <div className={"toggle_box new_line"}>{toggleContents}</div>}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.color.shades.BLACK};

  .green_text {
    color: ${({ theme }) => theme.color.secondary.GREEN};
  }

  .gray_text {
    cursor: pointer;
    font-size: 14px;
    color: ${({ theme }) => theme.color.neutral[300]};
  }

  .small_text {
    flex-grow: 1;
    font-size: 14px;
  }

  .box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
  }

  .check_box {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  .toggle_box {
    width: 100%;
    height: 124px;
    padding: 16px;
    overflow-y: scroll;
    background-color: ${({ theme }) => theme.color.neutral[50]};
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: ${({ theme }) => theme.color.shades[100]};

    -ms-overflow-style: none;
  }

  .toggle_box::-webkit-scrollbar {
    display: none;
  }

  .new_line {
    white-space: pre-line;
  }
`;
export default TOSItem;
