import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "./Projects/10-sidebar/SidebarContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </BrowserRouter>
  </StrictMode>
);
