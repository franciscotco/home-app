import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    min-height: 0;
    min-width: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  html {
    font-size: calc(12px / 1.4);
    @media (${({ theme }): string => theme.media.desktop}) {
      font-size: calc(14px / 1.4);
    }
    @media (${({ theme }): string => theme.media.desktopMedium}) {
      font-size: calc(14px / 1.4);
    }
  }

	body {
    margin: 0;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: ${({ theme }): string => theme.font.size.regular};
	}

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

export default GlobalStyle;
