import styled from "styled-components";
import { theme } from "../config/style/theme";
import { font } from "../config/style/fontTheme";

const Button = ({
  contents,
  onClick,
  width,
  height = "40px",
  color = theme.color.primary[400],
  fontColor = theme.color.shades.WHITE,
  padding,
  borderRadius,
  borderColor,
  disabled = false,
}: {
  contents: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  color?: string;
  padding?: string;
  fontColor?: string;
  borderRadius?: string;
  borderColor?: string;
  disabled?: boolean;
}) => {
  return (
    <StyledButton
      style={{
        width,
        height,
        padding,
        borderRadius,
        color: fontColor,
        borderColor: borderColor === undefined ? color : borderColor,
      }}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {contents}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  height: 40px;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
  text-align: center;
  cursor: pointer;
  white-space: nowrap;

  ${font.spoqaHanSansNeo.medium.paragraph[3]};

  &:disabled {
    background: #a5a5a5;
    color: #ffffff;
    border-color: #a5a5a5 !important;
  }
`;

export default Button;
