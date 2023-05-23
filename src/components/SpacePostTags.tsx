import React, { useState } from "react";
import PostTitle from "./PostTitle";
import PostText from "./PostText";
import styled from "styled-components";
import { font } from "../config/style/fontTheme";
import XIcon from "../../public/assets/Cross.svg";
import { TSpaceType } from "../../pages/space/post";

interface ISpacePostTags {
  tags: string[];
  handlerAddTag: (tag: string) => void;
  handlerDeleteTag: (tag: string) => void;
  spaceType: TSpaceType;
}

function SpacePostTags({ tags, handlerAddTag, handlerDeleteTag, spaceType }: ISpacePostTags) {
  const [tagStr, setTagStr] = useState("");

  const handlerSetTagStr = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTagStr(e.target.value);
  };

  const handlerEnterSpace = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code !== "Space") return;
    handlerAddTag(tagStr);
    setTagStr("");
  };

  return (
    <div>
      <PostTitle text="태그" require={true} />
      <TagsWrapper>
        {tags.map((tag, idx) => (
          <Tag key={idx}>
            {tag}
            <XIcon
              onClick={() => {
                handlerDeleteTag(tag);
              }}
            />
          </Tag>
        ))}
        {spaceType !== undefined && <Tag>{spaceType}</Tag>}
      </TagsWrapper>
      <PostText
        placeholder="공간과 관련된 단어를 작성해주세요. 스페이스바를 누르면 태그가 생성되어요. &#10;(최대 7자씩 2개)"
        value={tagStr}
        onChange={handlerSetTagStr}
        onKeyUp={handlerEnterSpace}
        disabled={tags.length >= 2}
        maxLength={7}
      />
    </div>
  );
}

const TagsWrapper = styled.div`
  min-height: 32px;
  margin: 8px 0;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  display: flex;
  height: 32px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 7px 8px;
  background: #ffffff;
  border: 1px solid #047fff;
  ${font.spoqaHanSansNeo.medium.paragraph[3]};
`;
export default SpacePostTags;
