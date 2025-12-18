import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ReviewItem from "./ReviewItem";
import "./Reviews.css";
import { data } from "./Data";
import { useState } from "react";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleForward(): void {
    if (currentIndex >= data.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handleBackward(): void {
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
        <div className="reviews">
          <ReviewItem {...data[currentIndex]} />
          <div className="reviews-nav">
            <button>
              <FaChevronRight onClick={handleForward} />
            </button>
            <button>
              <FaChevronLeft onClick={handleBackward} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
