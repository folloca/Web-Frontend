import styled from "styled-components";

const Button = ({ contents, onClick, width }: { contents: string; onClick?: () => void; width?: string }) => {
  return (
    <StyledButton style={{ width: width }} onClick={() => onClick}>
      {contents}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  height: 40px;
  border: 1px solid ${({ theme }) => theme.color.primary[400]};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.primary[400]};
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.color.shades.WHITE};
  cursor: pointer;
`;

export default Button;
