import { css, styled } from "styled-components";

import { type ExpenseName } from "@src/interfaces/Expenses";

export const Root = styled.div<{ name: ExpenseName }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }): string => theme.border.radius.rounded};
  font-size: ${({ theme }): string => theme.font.size.large};
  font-weight: ${({ theme }): number => theme.font.weight.bold};
  background-color: ${({ theme }): string => theme.color.text};
  padding: ${({ theme }): string => theme.spacing.xs};
  border: 1px solid ${({ theme }): string => theme.color.border};

  ${({ name }): ReturnType<typeof css> => {
    switch (name) {
      case "francois":
        return css`
          color: #228b22;
        `;
      case "emma":
        return css`
          color: #00008b;
        `;
    }
  }}
`;
