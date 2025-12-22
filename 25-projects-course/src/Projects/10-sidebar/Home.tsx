import { FaBars } from "react-icons/fa6";
import "./Home.css";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";

export default function SidebarHome() {

    const sidebarContext = useContext(SidebarContext)

  return (
    <main className="sidebar-root">
      <button className="sidebar-toggle" onClick={sidebarContext?.openSidebar}>
        <FaBars />
      </button>
      <Sidebar/>
    </main>
  );
}
