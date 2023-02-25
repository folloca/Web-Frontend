import styled from "styled-components";
const LargeRoundCheckBox = () => {
  return (
    <Wrapper>
      <input type={"checkbox"} />
    </Wrapper>
  );
};

const Wrapper = styled.span`
  width: 26px;
  height: 26px;
  margin-right: 4px;

  input[type="checkbox"] {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.color.neutral[200]};
    appearance: none;
    cursor: pointer;
    margin: 0px;
    background: url("/assets/LargeGrayCheck.svg") center no-repeat;
  }

  input[type="checkbox"]:checked {
    background: url("/assets/LargeWhiteCheck.svg") center no-repeat;
    background-color: ${({ theme }) => theme.color.primary[400]};
  }
`;
export default LargeRoundCheckBox;
