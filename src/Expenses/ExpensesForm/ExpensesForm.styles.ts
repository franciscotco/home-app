import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }): string => theme.spacing.sm};
`;

export const FormFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  gap: ${({ theme }): string => theme.spacing.sm};
`;
