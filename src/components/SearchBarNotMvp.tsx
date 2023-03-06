import React, { ChangeEvent } from "react";
import styled from "styled-components";
import Image from "next/image";

const relatedSearchData = ["커피", "커피숍", "커플", "커플을위한"];

const SearchBar = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [searchTags, setSearchTags] = React.useState<Array<string>>([]);
  const totalCount = 12;

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchTags([...searchTags, searchValue]);
      setSearchValue("");
    }
  };

  return (
    <Wrapper>
      <div className="row">
        <Image src="/assets/Search.svg" alt="search" width={40} height={40} />
        <div className="column">
          <div className="row">
            {searchTags && (
              <div className="searchTagContainer">
                {searchTags.map((item, index) => (
                  <TagItem key={index}>{item}</TagItem>
                ))}
              </div>
            )}
            <input
              placeholder="관심있는 주제를 검색해보세요!"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyPress={handleOnKeyPress}
            />
          </div>
          {searchValue && (
            <TagContainer>
              <div className="item__wrapper">
                {relatedSearchData.map((item, index) => (
                  <span className="item" key={index}>
                    {item}
                  </span>
                ))}
              </div>
              <span className="text">
                총 <span className="highlight__text">{totalCount}개</span> 검색 결과
              </span>
            </TagContainer>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .row {
    display: flex;
  }

  .column {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 16px;
  }

  input {
    flex-grow: 1;
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1.5px solid ${({ theme }) => theme.color.shades["BLACK"]};
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.shades["BLACK"]};
    :focus {
      outline: none;
    }
  }

  input::placeholder {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.shades["BLACK"]};
  }

  .searchTagContainer {
    display: flex;
    border-bottom: 1.5px solid ${({ theme }) => theme.color.shades["BLACK"]};
    gap: 16px;
    padding-right: 8px;
  }
`;

const TagItem = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  padding: 7px 12px;
  border: 1px solid ${({ theme }) => theme.color.primary[400]};
  height: 40px;
  //margin-bottom: 8px;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.color.shades["BLACK"]};

  .item__wrapper {
    display: flex;
    gap: 16px;
  }

  .item {
    padding: 8px 12px;
    border: 1px solid ${({ theme }) => theme.color.primary[400]};
    height: 40px;
  }

  .text {
    font-weight: 500;
    font-size: 14px;
    text-align: right;
  }

  .highlight__text {
    color: ${({ theme }) => theme.color.primary[400]};
  }
`;

export default SearchBar;
