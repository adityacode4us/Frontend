/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { mantineTheme } from "./utils/constants.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={mantineTheme} withGlobalStyles>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
