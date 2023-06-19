import { css, styled } from "styled-components";

import { type ControlSize } from "@src/interfaces/Controls";
import { type Variant } from "@src/interfaces/Variants";

export const ButtonRoot = styled.button<{
  size?: ControlSize;
  width?: "full";
  variant?: Variant;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }): string => theme.border.radius.regular};
  line-height: 140%;
  font-weight: ${({ theme }): number => theme.font.weight.medium};
  font-size: ${({ theme }): string => theme.font.size.regular};

  &:not(&:disabled) {
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({ theme, variant }): ReturnType<typeof css> | null => {
    switch (variant) {
      case "primary":
        return css`
          background-color: ${theme.color.backgroundSubtle};
          border: 1px solid ${theme.color.border};
          color: ${theme.color.text};
        `;
      default:
        return css`
          border: none;
          background-color: unset;
        `;
    }
  }}

  ${({ theme, size }): ReturnType<typeof css> | null => {
    switch (size) {
      case "small":
        return css`
          height: 28px;
          padding: ${theme.spacing.xs} ${theme.spacing.sm};
        `;
      case "medium":
        return css`
          height: 32px;
          padding: ${theme.spacing.xs} ${theme.spacing.sm};
        `;
      default:
        return null;
    }
  }}

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
