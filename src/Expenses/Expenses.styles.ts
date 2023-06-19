import { styled } from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }): string => theme.spacing.sm};
  padding: ${({ theme }): string => theme.spacing.sm};

  width: 100%;
  height: 100%;

  background-color: ${({ theme }): string => theme.color.background};
  color: ${({ theme }): string => theme.color.text};
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }): string => theme.spacing.sm};
  padding: ${({ theme }): string => theme.spacing.m};

  font-size: ${({ theme }): string => theme.font.size.section};
  font-weight: ${({ theme }): number => theme.font.weight.medium};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${({ theme }): string => theme.spacing.sm};
  flex: 1;

  width: 100%;
  height: 100%;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;
