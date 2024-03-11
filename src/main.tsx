import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.layer.css";
import { MantineProvider } from "@mantine/core";

import { theme, cssVariablesResolver } from "../lib";
import "../lib/style.layer.css";

import App from "./App.tsx";

import "./style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
