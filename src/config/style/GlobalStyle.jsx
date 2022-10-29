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


  @font-face {
    font-family: "Spoqa Han Sans Neo Bold";

    src: url("/fonts/SpoqaHanSansNeo_all/SpoqaHanSansNeo-Bold.woff") format("woff");
  }

  ;

  @font-face {
    font-family: "Spoqa Han Sans Neo Regular";

    src: url("/fonts/SpoqaHanSansNeo_all/SpoqaHanSansNeo-Regular.woff") format("woff");
  }

  ;

  @font-face {
    font-family: "Spoqa Han Sans Neo Medium";

    src: url("/fonts/SpoqaHanSansNeo_all/SpoqaHanSansNeo-Medium.woff") format("woff");
  }

  ;

  @font-face {
    font-family: "Neue Haas Grotesk Display Pro";

    src: url("/fonts/NeueHaasDisplay_all/NeueHaasDisplayRoman.ttf") format("ttf");
  }

  ;

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
