import Question from "./Question";
import "./FAQ.css";
import { useState } from "react";
import faqs from "./Data";

export default function FAQ() {
  const [questions, setQuestions] = useState(faqs);

  return (
    <div className="faq-root">
      <div className="faq-container">
        <h3>سوالات متداول (FAQ)</h3>
        <p>در این بخش به برخی از سوالات متداول کاربران پاسخ داده شده است.</p>
        <div className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
          {/* {questions.map((question, index) => {
            return <Question key={index} {...question} />;
          })} */}
        </div>
      </div>
    </div>
  );
}
