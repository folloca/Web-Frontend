import styled from "styled-components";
import CardContainer from "../containers/CardContainer";
import Image from "next/image";
import React from "react";
import SpaceCard from "./SpaceCard";

const SearchResultLayout = ({ title, count }: { title: string; count: number }) => {
  const [isToggleOpen, setIsToggleOpen] = React.useState(false);
  return (
    <Wrapper>
      <div className="row">
        <span className="title">
          {title}
          <span className="highlight__text">{count}</span>
        </span>
        {count >= 4 && (
          <button className="toggle__btn" onClick={() => setIsToggleOpen(!isToggleOpen)}>
            {isToggleOpen ? "요약보기" : "전체보기"}
            <Image
              src={"/assets/SmallBlueCheck.svg"}
              alt={"toggle button"}
              width={16}
              height={16}
              className={isToggleOpen ? "icon__rotate" : ""}
            />
          </button>
        )}
      </div>
      <section>
        {title === "기획" && <CardContainer isToggleOpen={isToggleOpen} />}
        {title === "공간" && (
          <div className="card__container">
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
          </div>
        )}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;

  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .title {
    color: ${({ theme }) => theme.color.shades["BLACK"]};
  }

  .icon__rotate {
    transform: rotate(180deg);
  }

  .highlight__text {
    margin-left: 6px;
    color: ${({ theme }) => theme.color.primary[400]};
  }

  .toggle__btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    background-color: ${({ theme }) => theme.color.shades["WHITE"]};
    border: none;
    padding: 0;
    font-weight: 500;
    font-size: 16px;
    text-align: right;
    color: ${({ theme }) => theme.color.primary[400]};
    cursor: pointer;
  }

  .card__container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 25px;
    grid-row-gap: 32px;

    ${({ theme }) => theme.device.desktop`
        grid-template-columns: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 32px;
  `}
  }
`;

export default SearchResultLayout;
