import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

export default function Question({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [infoToggled, infoToggledSet] = useState(false);

  function toggleInfo(): void {
    infoToggledSet(!infoToggled);
  }

  return (
    <div className="question">
      <header>
        <h5 onClick={toggleInfo}>{question}</h5>
        {infoToggled ? (
          <FaAngleDown className="toggle" onClick={toggleInfo} />
        ) : (
          <FaAngleRight className="toggle" onClick={toggleInfo} />
        )}
      </header>
      {infoToggled && <p>{answer}</p>}
    </div>
  );
}
