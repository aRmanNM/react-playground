import { useEffect, useState } from "react";
import "./Mode.css";

export default function Mode() {
  const getMode = () => {
    const initialMode = localStorage.getItem("dark-checked");
    if (initialMode == null) {
      if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
        return true;
      } else {
        return false;
      }
    } else {
      return JSON.parse(initialMode);
    }
  };

  const [checked, setChecked] = useState(getMode);

  useEffect(() => {
    localStorage.setItem("dark-checked", `${checked}`);
  }, [checked]);

  return (
    <div className={checked ? "mode-root dark-mode" : "mode-root"}>
      <div className="mode-container">
        <header className="header">
          <div className="nav">
            <ul>
              <li>خانه</li>
              <li>درباره‌ما</li>
              <li>تماس‌با‌ما</li>
            </ul>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              onChange={() => setChecked(!checked)}
              checked={checked}
            />
            <span className="slider"></span>
          </label>
        </header>
        <div className="content">
          <div className="container heading">
            <h1>
              {checked
                ? "دارک مود فعال شده و فضا تاریکه"
                : "لایت مود فعال شده و فضا روشنه"}
            </h1>
            <p>
              {checked
                ? "این دارک مود است و الان صفحه تیره است"
                : "این لایت مود است و الان صفحه سفید است"}
            </p>
          </div>
          <div className="container">
            <div className="mode-card">
              <div className="mode-card-item">
                <img src="https://picsum.photos/id/100/200" alt="" />
                <h2>کارت اول</h2>
                <p>این کارت اول است</p>
              </div>
              <div className="mode-card-item">
                <img src="https://picsum.photos/id/101/200" alt="" />
                <h2>کارت دوم</h2>
                <p>این کارت دوم است</p>
              </div>
              <div className="mode-card-item">
                <img src="https://picsum.photos/id/104/200" alt="" />
                <h2>کارت سوم</h2>
                <p>این کارت سوم است</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
