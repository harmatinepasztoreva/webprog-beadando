import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SpaPage from "./spa/SpaPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SpaPage />
  </StrictMode>
);