import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/app/styles/index.scss";
import { Main } from "@/pages/main";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
