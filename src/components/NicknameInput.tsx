import styled from "styled-components";
import DiceImg from "../../public/assets/Dice-icon.svg";
import Image from "next/image";

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
  return (
    <Wrapper>
      <StyledInput placeholder={placeholder} readOnly={readOnly} />
      <DiceImg className="icon" />
    </Wrapper>
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

export default NicknameInput;
