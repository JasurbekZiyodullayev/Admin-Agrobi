import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "green",
  defaultRadius: "md",
  colors: {
    green: [
      "#14A154",
      "#14A154",
      "#14A154",
      "#14A154",
      "#14A154",
      "#14A154",
      "#14A154",
      "#14A154",
      "#14A154",
      "#14A154",
    ],
  },
  cursorType: "pointer",
  components: {
    Container: {
      defaultProps: {
        size: "xl",
      },
    },
    Input: {
      defaultProps: {
        size: "md",
      },
      styles: {
        input: {},
      },
    },
    PasswordInput: {
      defaultProps: {
        size: "sm",
      },
      styles: {
        innerInput: {
          fontSize: "14px",
        },
      },
    },
  },
});
