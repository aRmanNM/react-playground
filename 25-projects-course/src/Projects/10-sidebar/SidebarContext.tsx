import { createContext, useState } from "react";

type SidebarContextType = {
  sidebarOpen: boolean;
  openSidebar: () => void
  closeSidebar: () => void
};

export const SidebarContext = createContext<SidebarContextType | null>(null);

export function SidebarProvider({ children }: { children: any }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <SidebarContext.Provider value={{ sidebarOpen, openSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}
