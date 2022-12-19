import styled from "styled-components";

const Input = ({
  width,
  placeholder,
  readOnly,
  value,
  onChange,
}: {
  width: string;
  placeholder: string;
  readOnly?: boolean;
  value?: string;
  onChange?: () => void;
}) => {
  return <StyledInput width={width} placeholder={placeholder} readOnly={readOnly} />;
};

const StyledInput = styled.input`
  width: ${(props) => props.width};
  height: 40px;
  border: 1px solid ${({ theme }) => theme.color.primary[400]};
  padding: 8px 16px;

  :focus {
    outline: none;
  }

  ::placeholder,
  ::-webkit-input-placeholder :-ms-input-placeholder {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: ${({ theme }) => theme.color.neutral[400]};
  }
`;

export default Input;
