import { css, styled } from "styled-components";

export const Root = styled.div<{ width?: "full" }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }): string => theme.spacing.xs};

  ${({ width }): ReturnType<typeof css> | null => {
    switch (width) {
      case "full":
        return css`
          width: 100%;
        `;
      default:
        return null;
    }
  }}
`;

export const Label = styled.label<{ align?: "center" }>`
  font-size: ${({ theme }): string => theme.font.size.large};
  font-weight: ${({ theme }): number => theme.font.weight.medium};

  ${({ align }): ReturnType<typeof css> | null => {
    switch (align) {
      case "center":
        return css`
          text-align: center;
        `;
      default:
        return null;
    }
  }}
`;
