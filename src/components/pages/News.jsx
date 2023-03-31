import React, { useEffect, useState } from "react";
import "./Style.scss";
import gif from "../../assets/meta-logo-gif.gif";

export const News = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:2007/replay`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="news_page">
        <img className="meta_gif" src={gif} alt="gif" />
        <h3 className="title">Latest News:</h3>

        <div className="replay">
          {!data ? (
            <p className="message">Loading...</p>
          ) : (
            <p>
              «{data.message}» <br />
              {data.user}
              <br />
              <span>
                {data.email} <br /> {data.phone}
              </span>
            </p>
          )}
        </div>
      </div>
    </>
  );
};
