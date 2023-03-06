import React from "react";
import type { NextPage } from "next";
import SearchBar from "../../src/components/SearchBar";
import styled from "styled-components";
import RecommendLayout from "../../src/components/RecommendLayout";
import SearchResultLayout from "../../src/components/SearchResultLayout";

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
      <div className="contents">
        {searchTags.length === 0 ? (
          <RecommendLayout title={"무더운 여름을 위한 추천 기획"} />
        ) : (
          <>
            <SearchResultLayout title={"기획"} count={4} />
            <SearchResultLayout title={"공간"} count={3} />
          </>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 70px;

  .contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 32px;
    padding-bottom: 200px;
    gap: 48px;
  }
`;

export default Search;
