
import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string,
  isPrimary: boolean
}

const ButtonCustom = ({ text, isPrimary = false }: ButtonProps) => {
  return <StyledButton isPrimary={isPrimary}>{text}</StyledButton>
}

const StyledButton = styled.button<ButtonProps>`
  color: ${props => props.isPrimary ? 'red' : 'blue'} 
`;

export default ButtonCustom

