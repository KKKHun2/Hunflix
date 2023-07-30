import "styled-components";

declare module 'styled-components' {
  export interface DefaultTheme {
    color: { background: string; neutral: string; point: string; primary: string; secondary: string; text: string };
  }
}
