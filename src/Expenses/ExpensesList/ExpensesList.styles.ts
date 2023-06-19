import { styled } from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({ theme }): string => theme.spacing.s};

  padding-left: ${({ theme }): string => theme.spacing.s};
  padding-right: ${({ theme }): string => theme.spacing.sm};
`;

export const SortOrder = styled.span`
  color: ${({ theme }): string => theme.color.textSubtle};
  font-size: ${({ theme }): string => theme.font.size.small};
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  overflow-y: auto;
`;
