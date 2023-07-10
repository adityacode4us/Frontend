import { MantineThemeOverride } from "@mantine/core";

export const mantineTheme: MantineThemeOverride = {
  fontFamily: "Inter, sans-serif",
  components: {
    // component defaults
    AppShell: {
      styles: (theme) => ({
        root: {
          backgroundColor: theme.colors.secondary[3],
        },
      }),
    },
    Title: {
      styles: () => ({
        root: {
          color: "#3B444D",
        },
      }),
    },
    Modal: {
      styles: (theme) => ({
        header: {
          alignItems: "flex-start",
          "& .mantine-Modal-title": {
            width: "95%",
            display: "flex",
            justifyContent: "center",
            paddingTop: theme.spacing.sm,
          },
        },
        body: {
          padding: theme.spacing.xs,
          margin: theme.spacing.md,
          marginTop: theme.spacing.xs,
        },
      }),
      defaultProps: {
        closeButtonProps: {
          iconSize: "25px",
          size: "70",
          style: {
            fontWeight: 200,
          },
        },
      },
    },
  },
  colors: {
    primary: [
      "#BDD4EF",
      "#A1C2E7",
      "#87B1E1",
      "#6FA1DB",
      "#5993D6",
      "#4586D1",
      "#337ACC",
      "#2E6FBA",
      "#265C9A",
      "#204C7F",
    ],
    secondary: [
      "#FBFDFE",
      "#F7FAFD",
      "#F3F8FC",
      "#F2F7FC",
      "#DCE9F5",
      "#C8D6E4",
      "#A1ACB7",
      "#8191A1",
      "#667A8E",
      "#566574",
    ],
  },
  primaryColor: "primary",
};
