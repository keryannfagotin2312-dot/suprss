
import React, { useEffect, useState } from "react";
import { getFavorites } from "../services/api";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites()
      .then((res) => setFavorites(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Favoris</h1>
      <ul>
        {favorites.map((fav) => (
          <li key={fav.id}>{fav.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
