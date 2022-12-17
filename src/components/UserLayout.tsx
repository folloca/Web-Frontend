import styled from "styled-components";
import Image from "next/image";

type AppLayoutProps = {
  children: React.ReactNode;
  title: string;
};
export default function UserLayout({ children, title }: AppLayoutProps) {
  return (
    <Container>
      <TitleContainer>
        <Image src={"/assets/Logo.svg"} width={230} height={48} alt={"logo image"} />
        <h2>{title}</h2>
      </TitleContainer>
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 72px 0 0 0;
`;

const TitleContainer = styled.div`
  h2 {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    display: flex;
    align-items: flex-end;

    margin-bottom: 48px;

    color: #000000;
  }
`;
