import styled from "styled-components";
import { theme } from "../config/style/theme";

const Button = ({
  contents,
  onClick,
  width,
  color = theme.color.primary[400],
}: {
  contents: string;
  onClick?: () => void;
  width?: string;
  color?: string;
}) => {
  return (
    <StyledButton style={{ width: width }} color={color} onClick={onClick}>
      {contents}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  height: 40px;
  border: 1px solid ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
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
