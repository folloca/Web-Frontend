import styled from "styled-components";
import CardContainer from "../containers/CardContainer";

interface IRecommendLayout {
  title: string;
  recommendList?: Array<string>;
}

const RecommendLayout = ({ title, recommendList }: IRecommendLayout) => {
  return (
    <Wrapper>
      <article>
        <div className="text">{title}</div>
        <section className="card__container">
          <CardContainer />
        </section>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .text {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme }) => theme.color.shades["BLACK"]};

    margin-bottom: 40px;
  }

  .card__container {
    display: grid;
    grid-column-gap: 168px;
  }
`;

export default RecommendLayout;
