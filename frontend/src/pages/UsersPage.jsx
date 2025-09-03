import React, { useEffect, useState } from "react";
import { getUsers, createUser } from "../services/api";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUsers()
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      await createUser({ name, email });
      const res = await getUsers();
      setUsers(res.data);
      setName("");
      setEmail("");
    } catch (err) {
      console.error("Erreur ajout utilisateur :", err);
    }
  };

  return (
    <div>
      <h1>Utilisateurs</h1>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Ajouter</button>
      </form>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} ({u.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;


