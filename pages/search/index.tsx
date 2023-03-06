import type { NextPage } from "next";
import SearchBar from "../../src/components/SearchBar";
import styled from "styled-components";

const Search: NextPage = () => {
  return (
    <Wrapper>
      <SearchBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 70px;
`;

export default Search;
