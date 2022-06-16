// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig, theme as base } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
// 3. extend the theme
const theme = extendTheme({
  config,
  fonts: {
    heading: `"Fira Sans", ${base.fonts?.heading}`,
    body: `"Fira Sans", ${base.fonts?.body}`,
  },
});

export { theme };
