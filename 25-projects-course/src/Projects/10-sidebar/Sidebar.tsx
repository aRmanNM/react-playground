import { FaTimes } from "react-icons/fa";
import { links } from "./Data";
import avatar from "./avatar.png";
import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";

export default function Sidebar() {
  const sidebarContext = useContext(SidebarContext);

  return (
    <aside className={ sidebarContext?.sidebarOpen ? "sidebar show-sidebar" : "sidebar" }>
      <div className="sidebar-header">
        <button className="close-btn" onClick={sidebarContext?.closeSidebar}>
          <FaTimes />
        </button>
        <img src={avatar} alt="" />
      </div>
      <ul className="sidebar-links">
        {links.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.url}>
                {/* {item.icon} */}
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
