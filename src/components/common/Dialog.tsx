import React from "react";
import styled from "styled-components";
import Image from "next/image";
import button from "../Button";
import { font } from "../../config/style/fontTheme";

type AppDialogProps = {
  title: string;
  contents: string;
  grayBtn?: string;
  blueBtn?: string;
  isCloseButton?: boolean;
  onClick: () => void;
  grayBtnOnClick?: () => void;
};

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.6);
  overflow: hidden;
  z-index: 20;
`;

const Wrapper = styled.div`
  position: relative;
  width: 600px;
  height: 296px;
  border: 1.5px solid ${({ theme }) => theme.color.primary[400]};
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fafafa;
  gap: 16px;
  padding: 64px 0 48px;

  text-align: center;
  color: ${({ theme }) => theme.color.primary[400]};

  .title {
    ${font.neueHaasGroteskDisplayPro.display[1]};
  }

  .contents {
    white-space: pre-line;
    ${font.spoqaHanSansNeo.medium.paragraph[2]};
  }

  .icon__wrapper {
    position: static;
    margin-top: -64px;
    padding-top: 16px;
    padding-right: 16px;
    margin-left: auto;
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  button {
    width: 112px;
    height: 56px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    ${font.spoqaHanSansNeo.medium.paragraph[2]};
  }

  .blue {
    color: ${({ theme }) => theme.color.shades["WHITE"]};
    background: ${({ theme }) => theme.color.primary[400]};
  }

  .gray {
    color: ${({ theme }) => theme.color.neutral[400]};
    background: ${({ theme }) => theme.color.shades["WHITE"]};
    border: 1px solid ${({ theme }) => theme.color.neutral[400]};
    margin-right: 32px;
  }
`;

export default function Dialog({
  title,
  contents,
  grayBtn,
  blueBtn,
  onClick,
  isCloseButton,
  grayBtnOnClick = () => {},
}: AppDialogProps) {
  React.useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      width: 100vw;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <Container>
      <Wrapper>
        {isCloseButton && (
          <div className="icon__wrapper">
            <Image src={"/assets/X-Icon.svg"} width={32} height={32} alt="x icon" />
          </div>
        )}

        <div className="title">{title}</div>
        <div className="contents">{contents}</div>
        {blueBtn && !grayBtn && (
          <ButtonContainer>
            <button className="blue" onClick={onClick}>
              {blueBtn}
            </button>
          </ButtonContainer>
        )}
        {blueBtn && grayBtn && (
          <ButtonContainer>
            <button className="gray" onClick={grayBtnOnClick}>
              {grayBtn}
            </button>
            <button className="blue" onClick={onClick}>
              {blueBtn}
            </button>
          </ButtonContainer>
        )}
      </Wrapper>
    </Container>
  );
}
