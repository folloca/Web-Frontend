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

  .space-status.ongoing {
    color: #047fff;
  }

  .space-status.grayStatus {
    color: #C5C5C5;
  }


  a {
    ${(props) => props.theme.font.spoqaHanSansNeo.medium.paragraph["2"]};
    text-decoration: none;
    color: ${(props) => props.theme.color.shades.BLACK};
    cursor: pointer;
  }

  ;


  ${({ theme }) => theme.device.mobile``}

  ;
  ${({ theme }) => theme.device.tablet``}

  ;

`;

export default GlobalStyle;
