import styled from "styled-components";
import DiceImg from "../../public/assets/Dice-icon.svg";
import Image from "next/image";
import React from "react";

const NicknameInput = ({
  placeholder,
  readOnly,
  value,
  onChange,
}: {
  placeholder: string;
  readOnly?: boolean;
  value?: string;
  onChange?: () => void;
}) => {
  const [isAvailable, setIsAvailable] = React.useState(true);

  return (
    <>
      <AlertWrapper>
        {isAvailable ? (
          <span className="blue__text">사용 가능한 닉네임이에요.</span>
        ) : (
          <span className="red__text">이미 사용중인 닉네임이에요.</span>
        )}
      </AlertWrapper>
      <Wrapper>
        <StyledInput placeholder={placeholder} readOnly={readOnly} />
        <DiceImg className="icon" />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 418px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.color.primary[400]};
  padding: 8px 16px;
  display: flex;
  align-items: center;

  .icon {
    cursor: pointer;
  }
`;

const StyledInput = styled.input`
  width: 354px;
  border: none;
  padding: 0;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.color.primary[400]};

  :focus {
    outline: none;
  }

  ::placeholder,
  ::-webkit-input-placeholder :-ms-input-placeholder {
    color: ${({ theme }) => theme.color.primary[400]};
  }
`;

const AlertWrapper = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: -8px;

  .red__text {
    color: ${({ theme }) => theme.color.error};
  }

  .blue__text {
    color: ${({ theme }) => theme.color.primary[400]};
  }
`;

export default NicknameInput;
