import styled from "styled-components";
const RoundCheckBox = () => {
  return (
    <Wrapper>
      <input type={"checkbox"} />
    </Wrapper>
  );
};

const Wrapper = styled.span`
  width: 18px;
  height: 18px;
  margin-right: 4px;

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.color.neutral[200]};
    appearance: none;
    cursor: pointer;
    margin: 0px;
  }

  input[type="checkbox"]:checked {
    background: url("/assets/GrayCheck.svg") 2px 4px no-repeat;
  }
`;
export default RoundCheckBox;
