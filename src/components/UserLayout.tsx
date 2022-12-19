import styled from "styled-components";
import Image from "next/image";

type AppLayoutProps = {
  children: React.ReactNode;
  title: string;
};
export default function UserLayout({ children, title }: AppLayoutProps) {
  return (
    <Container>
      <Wrapper>
        <span className={"logo__wrapper"}>
          <Image
            src={"/assets/Logo.svg"}
            className={"logo_img"}
            layout={"fixed"}
            width={"230px"}
            height={"48px"}
            alt={"logo image"}
          />
        </span>
        <h2>{title}</h2>
        {children}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 72px 0 96px 0;
`;

const Wrapper = styled.div`
  margin: 0 auto;

  .logo__wrapper {
    margin-left: 8px;
  }

  h2 {
    margin-top: 8px;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    margin-bottom: 48px;

    color: #000000;
  }
`;
