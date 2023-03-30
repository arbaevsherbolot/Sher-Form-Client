import React, { useEffect, useState } from "react";
import "./Style.scss";

export const Result = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:2006/replay`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="result_page">
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
