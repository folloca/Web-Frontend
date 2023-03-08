import React from "react";
import type { NextPage } from "next";
import SearchBar from "../../src/components/SearchBar";
import styled from "styled-components";
import RecommendLayout from "../../src/components/RecommendLayout";
import SearchResultLayout from "../../src/components/SearchResultLayout";
import Image from "next/image";

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

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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
      {searchTags.length !== 0 && (
        <ScrollToTopBtn onClick={handleScrollToTop}>
          <Image src={"/assets/BlueUpArrow.svg"} alt="scrollToTop" width={32} height={33} />
        </ScrollToTopBtn>
      )}
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

const ScrollToTopBtn = styled.button`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: none;
  background: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  position: fixed;
  bottom: 96px;
  right: 38px;
`;

export default Search;
