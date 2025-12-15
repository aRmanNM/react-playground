import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "./PassInput.css";
import { useState } from "react";

export default function PassInput() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick(): any {
    setIsVisible(!isVisible);
  }

  return (
    <div className="wrapper">
      <div className="input-fields">
        <input type={isVisible ? 'text' : 'password'} />
        <span onClick={handleClick}>
          {isVisible ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
    </div>
  );
}
