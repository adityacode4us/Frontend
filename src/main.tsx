/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider, Text } from "@mantine/core";
import { mantineTheme } from "./utils/constants.ts";
import {RouterProvider,} from "react-router-dom"
import {router} from "./routes/routes.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={mantineTheme} withGlobalStyles>
      <App />
      <RouterProvider router={router}/>
    </MantineProvider>
  </React.StrictMode>
);
