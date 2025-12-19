import "./Scroll.css";
import { randomTexts } from "./Data";
import { useEffect, useRef, useState } from "react";
import Indicator from "./Indicator";

export default function Scroll() {
  const [content, setContent] = useState(randomTexts);
  const [scrollPercent, setScrollPercent] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    element.removeEventListener("scroll", processScroll);
    element.addEventListener("scroll", processScroll);
  }, []);

  function processScroll(e: Event) {
    const top = (e.target as any).scrollTop;
    const topMax = (e.target as any).scrollTopMax;
    setScrollPercent((top / topMax) * 100);
  }

  return (
    <div className="scroll-root">
      <Indicator {...{ scrollPercent }} />
      <div className="scroll-container" ref={containerRef}>
        {content.map((item) => {
          return (
            <section key={item.id}>
              <p>{item.text}</p>
            </section>
          );
        })}
      </div>
    </div>
  );
}
