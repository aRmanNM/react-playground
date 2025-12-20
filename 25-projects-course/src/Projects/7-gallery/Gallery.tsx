import { useRef, useState } from "react";
import "./Gallery.css";
import { FaDownload } from "react-icons/fa6";

export default function Gallery() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [message, setMessage] = useState("");
  const [accessKey, setAccessKey] = useState("");

  const base_address = "https://api.unsplash.com/";

  const loadMoreRef = useRef<HTMLButtonElement>(null);

  function fetchImage() {
    setMessage("");
    loadMoreRef.current!.style.display = "none";
    setResult([]);

    if (!accessKey) {
      setMessage("کلید وارد نکردید");
      return;
    }

    if (!query) {
      setMessage("عبارتی برای جستجو وارد نکردید");
      return;
    }

    setMessage("در حال جستجو");

    fetch(
      `${base_address}search/photos?client_id=${accessKey}&query=${query}&page=${page}&per_page=12`
    )
      .then((res) => {
        if (!res.ok) {
          setMessage("خطایی رخ داد");
          return;
        }

        setMessage("");
        res.json().then((data) => {
          setResult(data.results);
          if (data.results.length >= 12) {
            loadMoreRef.current!.style.display = "block";
            setPage(2);
          }
        });
      })
      .catch((err) => {
        setMessage("خطایی رخ داد");
      });
  }

  function loadMoreImage() {
    loadMoreRef.current!.style.display = "none";
    setMessage("در حال جستجو");

    fetch(
      `${base_address}search/photos?client_id=${accessKey}&query=${query}&page=${page}&per_page=12`
    )
      .then((res) => {
        if (!res.ok) {
          setMessage("خطایی رخ داد");
          return;
        }

        setMessage("");
        res.json().then((data) => {
          setResult(result.concat(data.results));
          loadMoreRef.current!.style.display = "block";
          setPage(page + 1);
        });
      })
      .catch((err) => {
        setMessage("خطایی رخ داد");
      });
  }

  return (
    <div className="gallery-root">
      <div className="gallery-container">
        <div className="gallery-access">
          <input
            placeholder="<access-key>"
            type="text"
            value={accessKey}
            onChange={(e) => setAccessKey(e.target.value)}
          />
          <p>
            get from:{" "}
            <a href="https://unsplash.com/oauth/applications">
              https://unsplash.com/oauth/applications
            </a>
          </p>
        </div>
        <div className="gallery-header">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={fetchImage}>جستجو</button>
        </div>
        <div className="gallery">
          {message !== "" && <p className="message">{message}</p>}
          {result &&
            result.map((item: any, index) => {
              return (
                <div key={index} className="gallery-item">
                  <a
                    target="_blank"
                    download={item.id}
                    href={item.urls.regular}
                  >
                    <FaDownload />
                  </a>
                  <img src={item.urls.regular} alt={item.alt_description} />
                </div>
              );
            })}
          <button
            ref={loadMoreRef}
            className="load-more"
            onClick={loadMoreImage}
          >
            موارد بیشتر
          </button>
        </div>
      </div>
    </div>
  );
}
