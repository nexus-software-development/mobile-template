import "styled-components";

/**
 * @description Theme type
 * @example
 * const theme: ThemeType = {
 *   colors: {
 *     primary: "#000000",
 *     secondary: "#000000",
 *     tertiary: "#000000",
 *   },
 * };
 */
type ThemeType = {};

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
