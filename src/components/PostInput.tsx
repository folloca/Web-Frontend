import React from "react";
import styled from "styled-components";
import { font } from "../config/style/fontTheme";

interface IPostInput {
  placeholder?: string;
  maxLength?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: React.HTMLInputTypeAttribute;
  step?: number;
}

const PostInput = React.memo(
  ({
    placeholder,
    maxLength = undefined,
    onChange = () => {},
    value = "",
    type = "text",
    step = undefined,
  }: IPostInput) => {
    return (
      <Input
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        value={value}
        step={step}
        min={0}
      />
    );
  },
);

const Input = styled.input`
  width: 100%;
  padding: 8px 16px;
  height: 40px;
  background: #fafafa;
  box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  border-width: 0;

  ${font.spoqaHanSansNeo.regular.paragraph[2]}
  &::placeholder {
    color: #c5c5c5;
  }
`;

export default PostInput;
