import React from "react";
import type { NextPage } from "next";
import SearchBar from "../../src/components/SearchBar";
import styled from "styled-components";
import RecommendLayout from "../../src/components/RecommendLayout";

const Search: NextPage = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [searchTags, setSearchTags] = React.useState<Array<string>>([]);

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchTags([...searchTags, searchValue]);
      setSearchValue("");
    }
  };

  const handleRemoveTag = () => {
    setSearchTags([]);
  };

  return (
    <Wrapper>
      <SearchBar
        searchTags={searchTags}
        searchValue={searchValue}
        handleOnKeyPress={handleOnKeyPress}
        handleRemoveTag={handleRemoveTag}
        handleInputOnChange={handleInputOnChange}
      />
      <RecommendLayout title={"무더운 여름을 위한 추천 기획"} />
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
