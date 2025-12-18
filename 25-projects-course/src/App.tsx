import { Route, Routes } from "react-router-dom";
import PassInput from "./Projects/1-PassInput/PassInput";
import Home from "./Home";
import FAQ from "./Projects/2-faq/FAQ";
import Quote from "./Projects/3-quote/Quote";
import NavBar from "./Projects/4-navbar/Navbar";
import Reviews from "./Projects/5-reviews/Reviews";

function App() {
  return (
    <>
      <div className="root-nav">
        <a className="root-nav-btn" href="/">
          <button>home</button>
        </a>
        <a className="root-nav-btn" href="/pass-input">
          <button>pass-input</button>
        </a>
        <a className="root-nav-btn" href="/faq">
          <button>faq</button>
        </a>
        <a className="root-nav-btn" href="/quote">
          <button>quote</button>
        </a>
        <a className="root-nav-btn" href="/navbar">
          <button>navbar</button>
        </a>
        <a className="root-nav-btn" href="/reviews">
          <button>reviews</button>
        </a>
      </div>

      <hr className="root-hr" />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pass-input" element={<PassInput />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/quote" element={<Quote />}></Route>
        <Route path="/navbar" element={<NavBar />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
      </Routes>
    </>
  );
}

export default App;
