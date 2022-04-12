import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  text: string;
  isPrimary: boolean;
}

const ButtonCustom = ({ text, isPrimary = false }: ButtonProps) => {
  return <StyledButton isPrimary={isPrimary}>{text}</StyledButton>;
};

type StylesProps = {
  isPrimary: boolean;
};

const StyledButton = styled.button<StylesProps>`
  color: ${(props) => (props.isPrimary ? "red" : "blue")};

  width: 158px;
  height: 44px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;

  ${(props) =>
    props.isPrimary
      ? css`
          background-color: #344966;
          color: #f0f4ef;

          &:hover {
            background-color: #0d1821;
          }
          &:focus {
            border: 8px solid #d6d8e7;
          }
          &:disabled {
            background: #b9bac4;
          }
        `
      : css`
          border: 1px solid #0d1821;
          box-sizing: border-box;
          color: #0d1821;

          &:hover {
            border: 3px solid #0d1821;
          }
          &:focus {
            border: 8px solid #d6d8e7;
          }
          &:disabled {
            border: 1px solid #b9bac4;
            color: #b9bac3;
          }
        `};
`;

export default ButtonCustom;
