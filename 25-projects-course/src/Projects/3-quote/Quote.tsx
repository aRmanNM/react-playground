import { useState } from "react";
import { type QuoteItem, data } from "./Data";
import "./Quote.css";

export default function Quote() {
  const [count, setCount] = useState(0);
  const [quotes, setQuotes] = useState<QuoteItem[]>([]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): any {
    e.preventDefault();
    setQuotes(data.slice(0, count));
  }

  return (
    <>
      <div className="quote-root">
        <div className="quote-container">
          <h3>جملات بزرگان</h3>
          <p>جملاتی برای زندگی بهتر</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="total">تعداد:</label>
            <input
              type="number"
              name="total"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
            />
            <button type="submit">نمایش بده</button>
          </form>
          <article>
            {quotes.map((quote, index) => {
              return (
                <>
                  <div className="quote-item">
                    <h5>{quote.quote}</h5>
                    <p>{quote.person}</p>
                  </div>
                </>
              );
            })}
          </article>
        </div>
      </div>
    </>
  );
}
