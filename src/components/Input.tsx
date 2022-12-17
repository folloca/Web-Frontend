import styled from "styled-components";

const Input = ({ placeholder }: { placeholder: string }) => {
  return (
    <div>
      <StyledInput placeholder={placeholder} />
    </div>
  );
};

const StyledInput = styled.input`
  width: 418px;
  //width: 100%;
  height: 40px;
  border: 1px solid #047fff;
  padding: 8px;

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
    /* identical to box height, or 150% */

    /* WEB/Neutral/400 */

    color: #828282;
  }
`;

export default Input;
