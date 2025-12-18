import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ReviewItem from "./ReviewItem";
import "./Reviews.css";
import { data } from "./Data";
import { useState } from "react";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  function handleForward(): void {
    setDirection("next");
    if (currentIndex >= data.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handleBackward(): void {
    setDirection("prev");
    if (currentIndex <= 0) {
      setCurrentIndex(data.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <div className="reviews-root">
      <div className="reviews-container">
        <h2>نظرات کاربران</h2>
        <div className={`reviews ${direction}`}>
          <ReviewItem key={currentIndex} {...data[currentIndex]} />
          <div className="reviews-nav">
            <button onClick={handleForward} aria-label="next">
              <FaChevronRight />
            </button>
            <button onClick={handleBackward} aria-label="previous">
              <FaChevronLeft />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
