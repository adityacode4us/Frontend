import "./App.css";
import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  createStyles,
  rem,
} from "@mantine/core";
import Layout from "./features/Layout";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.custom[3]
        : theme.colors.secondary[0],
    borderRadius: theme.radius.lg,
    marginTop: rem(3),
    marginBottom: rem(3),
    border: `1px solid ${theme.colors.custom[2]}`,
  },
  header: {
    borderRadius: theme.radius.xl,
    marginTop: rem(5),
  },
}));

function App() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.custom[3]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        layout="alt"
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 50, lg: 50 }}
            className={classes.navbar}
          >
            {/* <Text>Application navbar</Text> */}
          </Navbar>
        }
        header={
          <Header
            height={{ base: 50, md: 50 }}
            p="md"
            ml="sm"
            mr="sm"
            className={classes.header}
          >
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <Text>Application header</Text>
            </div>
          </Header>
        }
      >
        <Layout />
      </AppShell>
    </>
  );
}

export default App;
