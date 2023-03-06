import React, { ChangeEvent } from "react";
import styled from "styled-components";
import Image from "next/image";

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

  const handleRemoveTag = () => {
    setSearchTags([]);
  };

  return (
    <Wrapper>
      <div className="row">
        <Image src="/assets/Search.svg" alt="search" width={40} height={40} />
        <div className="column">
          <div className="row">
            {searchTags.length !== 0 ? (
              <div className="searchTagContainer">
                {searchTags.map((item, index) => (
                  <TagItem key={index}>
                    <span>{item}</span>
                    <Image
                      src={"/assets/x-icon-gray.svg"}
                      alt={"remove tag"}
                      width={12}
                      height={12}
                      onClick={handleRemoveTag}
                    />
                  </TagItem>
                ))}
              </div>
            ) : (
              <input
                placeholder="관심있는 주제를 검색해보세요!"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyPress={handleOnKeyPress}
              />
            )}
          </div>
          {searchTags.length !== 0 && (
            <div className="search_count_wrapper">
              <span className="text">
                총 <span className="highlight__text">{totalCount}개</span> 검색 결과
              </span>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Spoqa Han Sans Neo";

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
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.shades["BLACK"]};
  }

  .search_count_wrapper {
    display: flex;
    align-items: center;
    margin-top: 16px;
  }

  .text {
    font-weight: 500;
    font-size: 14px;
    text-align: right;
    flex-grow: 1;
  }

  .highlight__text {
    color: ${({ theme }) => theme.color.primary[400]};
  }

  .searchTagContainer {
    display: flex;
    width: 100%;
    border-bottom: 1.5px solid ${({ theme }) => theme.color.shades["BLACK"]};
    padding-right: 8px;
  }
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: #000000;
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.color.primary[400]};
  height: 40px;
  margin-bottom: 8px;

  img {
    margin-left: 4px;
    cursor: pointer;
  }
`;

export default SearchBar;
