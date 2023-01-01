import React from "react";
import styled from "styled-components";
import GridTitle from "./GridTitle";
import PopularSymbol from "../../public/assets/Popular.svg";
import MPopularSymbol from "../../public/assets/MPopular.svg";
import { font } from "../config/style/fontTheme";
import Image from "next/image";
import { useRouter } from "next/router";

interface ICardProps {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  tags: string[];
}

function Card({ id, title, thumbnail, description, tags }: ICardProps) {
  const router = useRouter();
  const handleMovePlan = React.useCallback(async () => {
    await router.push({
      pathname: "/trend/plan/[planId]",
      query: { planId: id },
    });
  }, [id]);

  return (
    <Wrapper onClick={handleMovePlan}>
      <CardTitleWrapper>
        <GridTitle text={<div>{title}</div>} padding={"8px 0 2px 16px"} />
        <PopularSymbol />
      </CardTitleWrapper>

      <ContentsWrapper>
        <ImageContainer>
          <Image layout="fill" objectFit={"cover"} src={thumbnail} alt={"thumbnailImage"} />
        </ImageContainer>
        <div className={"half"}>
          <MCardTitleWrapper>
            <GridTitle
              font={font.spoqaHanSansNeo.bold.paragraph["3"]}
              text={
                <div style={{ width: "100%" }}>
                  {title} <MPopularSymbol />
                </div>
              }
              padding={"8px 0 2px 16px"}
            />
          </MCardTitleWrapper>
          <DescriptionWrapper>
            <p className={"description"}>{description}</p>
            <p className={"tags"}>{tags.join()}</p>
          </DescriptionWrapper>
        </div>
      </ContentsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 417px;
  height: 240px;
  cursor: pointer;

  ${({ theme }) => theme.device.desktop`
        width: 430px;
        height: 248px;
  `}

  ${({ theme }) => theme.device.tablet`
        width: 302px;
        height: 173px;
  `}

  ${({ theme }) => theme.device.mobile`
        width: 350px;
        height: 140px;
  `}
`;

const CardTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  min-width: 210px;

  & svg {
    overflow: visible;
    margin-left: 4px;
  }

  ${({ theme }) => theme.font.spoqaHanSansNeo.medium.heading}

  ${({ theme }) => theme.device.desktop`
  `}
  ${({ theme }) => theme.device.tablet`
        ${theme.font.spoqaHanSansNeo.medium.paragraph["2"]}
  `}

  ${({ theme }) => theme.device.mobile`
  display: none;
  min-width: 0px;
  `}
`;

const MCardTitleWrapper = styled.div`
  display: none;

  & svg {
    overflow: visible;
    margin-left: 4px;
  }

  ${({ theme }) => theme.device.mobile`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 100%;
  `}
`;

const ContentsWrapper = styled.div`
  display: flex;
  border: 1px solid #c5c5c5;
  border-radius: 0 4px 4px 4px;
  height: calc(100% - 43px);
  overflow: hidden;

  & .half {
    width: 54%;

    padding-left: 14px;
  }

  ${({ theme }) => theme.device.mobile`
        border-width: 0px;
        height: 100%;
        & .half {
          padding-left: 14px;
        }
  `}
`;

const ImageContainer = styled.div`
  position: relative;
  width: 46%;
  overflow: hidden;
  ${({ theme }) => theme.device.mobile`
        border-radius: 4px 0 0 4px;
        width: 140px;
        height:140px;
  `}
`;

const DescriptionWrapper = styled.div`
  padding: 20px 10px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .description {
    ${({ theme }) => theme.font.spoqaHanSansNeo.medium.paragraph["2"]}
    word-wrap: break-word;
  }

  & .tags {
    ${({ theme }) => theme.font.spoqaHanSansNeo.medium.caption["1"]}
    color: #828282;
  }

  ${({ theme }) => theme.device.mobile`
        flex-direction: column-reverse;
        & .description {
            font-family: 'Spoqa Han Sans Neo Medium';
            font-style: normal;
            font-weight: 500;
            font-size: 11px;
            line-height: 18px;
            color: #747679;
            
            border-top: 0.75px solid #EEEEEE;
        }
        
        & .tags {
            font-family: 'Spoqa Han Sans Neo';
            font-style: normal;
            font-weight: 500;
            font-size: 11px;
            line-height: 16px;
  `}
`;

export default Card;
