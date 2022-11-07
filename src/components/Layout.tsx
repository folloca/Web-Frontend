import Header from "./Header";
import { theme } from "../config/style/theme";
import GlobalStyle from "../config/style/GlobalStyle";
import { ThemeProvider } from "styled-components";

type AppLayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: AppLayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
}
