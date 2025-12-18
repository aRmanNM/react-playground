import { FaQuoteRight } from "react-icons/fa6";

export default function ({
  job,
  name,
  image,
  text,
}: {
  job: string;
  name: string;
  image: string;
  text: string;
}) {
  return (
    <div className="review-item">
      <div className="avatar">
        <div className="quote">
          <FaQuoteRight />
        </div>
        <img src={image} alt="avatar" />
      </div>
      <h4>{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
    </div>
  );
}
