import { Route, Routes } from "react-router-dom";
import PassInput from "./Projects/PassInput";
import Home from "./Home";

function App() {
  return (
    <>
      <div className="root-nav">
        <a className="root-nav-btn" href="/"><button>home</button></a>
        <a className="root-nav-btn" href="/pass-input"><button>1-pass_input</button></a>
      </div>

      <hr className="root-hr"/>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pass-input" element={<PassInput />}></Route>
      </Routes>
    </>
  );
}

export default App;
