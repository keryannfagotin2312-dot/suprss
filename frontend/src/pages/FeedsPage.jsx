import React, { useEffect, useState } from "react";
import { getFeeds } from "../services/api";

const FeedsPage = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    getFeeds()
      .then((res) => setFeeds(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Flux (Feeds)</h1>
      <ul>
        {feeds.map((f) => (
          <li key={f.id}>{f.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeedsPage;
