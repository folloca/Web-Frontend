import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }

  ;
  body {
    margin: 0;
  }

  ;
  a {
    ${(props) => props.theme.font.spoqaHanSansNeo.medium.paragraph["2"]};
    text-decoration: none;
    color: ${(props) => props.theme.color.shades.BLACK};
    cursor: pointer;
  }


  ${({ theme }) => theme.device.mobile``}
  ${({ theme }) => theme.device.tablet``}

`;

export default GlobalStyle;
