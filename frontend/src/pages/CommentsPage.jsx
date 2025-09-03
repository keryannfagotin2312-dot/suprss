import React, { useEffect, useState } from "react";
import { getComments } from "../services/api";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments()
      .then((res) => setComments(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Commentaires</h1>
      <ul>
        {comments.map((c) => (
          <li key={c.id}>{c.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsPage;
