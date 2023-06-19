import { styled } from "styled-components";

export const InputRoot = styled.input`
  height: 38px;
  padding: ${({ theme }): string => `${theme.spacing.xs} ${theme.spacing.s}`};
  width: 160px;
  border: 1px solid ${({ theme }): string => theme.color.text};
  background-color: transparent;
  color: ${({ theme }): string => theme.color.text};
  border-radius: ${({ theme }): string => theme.border.radius.regular};
`;
