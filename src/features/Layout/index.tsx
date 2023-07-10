import { RouterProvider } from "react-router-dom";
import { router } from "../../routes/routes";
import { Box, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  layoutWrapper: {
    border: "1px solid white",
    width: "100%",
    height: "100%",
    borderRadius: theme.radius.md,
    marginBottom: 0,
    padding: theme.spacing.sm,
  },
}));

const Layout = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.layoutWrapper}>
      <RouterProvider router={router} />
    </Box>
  );
};

export default Layout;
