const size = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px"
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  mobileL: `(max-width: ${size.tablet})`,
  tablet: `(max-width: ${size.laptop})`,
  laptop: `(max-width: ${size.desktop})`
};
