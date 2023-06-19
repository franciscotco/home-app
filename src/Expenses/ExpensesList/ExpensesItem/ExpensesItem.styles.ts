import { styled } from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }): string => theme.spacing.s};

  padding: ${({ theme }): string => theme.spacing.sm} 0;
`;

export const Amount = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;

  font-weight: ${({ theme }): number => theme.font.weight.bold};
`;
