import React from "react";
import styled from "styled-components";
import { font } from "../config/style/fontTheme";

interface IPostText {
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  maxLength?: number;
}

const PostText = React.memo(
  ({ placeholder, onChange = () => {}, onKeyUp = () => {}, value = "", disabled = false, maxLength }: IPostText) => {
    return (
      <Textarea
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        maxLength={maxLength}
        placeholder={placeholder}
        disabled={disabled}
      ></Textarea>
    );
  },
);

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px 16px;
  background: #fafafa;
  box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  border-width: 0;
  resize: none;

  ${font.spoqaHanSansNeo.regular.paragraph[2]}
  &::placeholder {
    color: #c5c5c5;
  }
`;

export default PostText;
