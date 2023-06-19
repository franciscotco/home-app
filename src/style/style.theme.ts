export const MEDIA_MOBILE = 375;
export const MEDIA_TABLET = 1024;
export const MEDIA_DESKTOP = 1440;
export const MEDIA_DESKTOP_MEDIUM = 1920;

export const THEME = {
  border: {
    radius: {
      regular: "6px",
      rounded: "50%",
    },
  },
  color: {
    text: "#e6edf3",
    textSubtle: "#7d8590",
    border: "#f0f6fc1a",
    backgroundSubtle: "#30363d",
    background: "#0d1117",
  },
  font: {
    weight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    style: {
      normal: "normal",
      italic: "italic",
    },
    size: {
      small: "1.2rem",
      regular: "1.4rem",
      large: "1.6rem",
      section: "2rem",
      header: "2.4rem",
    },
  },
  media: {
    mobile: `min-width: ${MEDIA_MOBILE}px`,
    tablet: `min-width: ${MEDIA_TABLET}px`,
    desktop: `min-width: ${MEDIA_DESKTOP}px`,
    desktopMedium: `min-width: ${MEDIA_DESKTOP_MEDIUM}px`,
  },
  spacing: {
    xs: ".4rem",
    s: ".8rem",
    sm: "1.2rem",
    m: "1.6rem",
    l: "2.4rem",
    xl: "3.2rem",
  },
  zIndex: {
    hidden: -1,
    popover: 10,
    modal: 100,
  },
} as const;
