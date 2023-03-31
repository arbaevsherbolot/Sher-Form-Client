import React, { useEffect, useState } from "react";
import "./Style.scss";
import gif from "../../assets/giphy-zoom.gif";

export const Result = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://light-bat-hose.cyclic.app/replay`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="result_page">
      <img src={gif} alt="gif" />
      <h3 className="title">Reply from the admin:</h3>

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
  );
};
