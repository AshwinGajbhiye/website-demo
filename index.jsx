import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";

// Create a root.
const root = createRoot(document.getElementById("root"));

// Initial render
root.render(<App />);
