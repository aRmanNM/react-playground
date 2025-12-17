import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import "./Navbar.css";
import logo from "./logo.jpg";
import { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const linksHeight = linksRef.current!.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current!.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current!.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <div className="navbar-root">
      <nav>
        <div className="navbar-container">
          <div className="navbar-logo">
            <button
              className="navbar-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              {showLinks ? <FaTimes /> : <FaBars />}
            </button>
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar-links" ref={linksContainerRef}>
            <ul ref={linksRef}>
              <li>
                <a href="/navbar">خانه</a>
              </li>
              <li>
                <a href="/navbar">درباره‌ما</a>
              </li>
              <li>
                <a href="/navbar">تماس‌با‌ما</a>
              </li>
              <li>
                <a href="/navbar">پروژه ها</a>
              </li>
            </ul>
          </div>
          <ul className="navbar-socials">
            <li>
              <a href="/navbar">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="/navbar">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="/navbar">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="/navbar">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
