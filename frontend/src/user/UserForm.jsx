import React, { useState, useEffect } from "react";
import api from "../api";

const UserForm = ({ userToEdit, onUserAdded }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name);
      setEmail(userToEdit.email);
      setEditing(true);
    }
  }, [userToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return alert("Preencha todos os campos!");

    if (editing) {
      await api.updateUser(userToEdit.id, { name, email });
    } else {
      await api.createUser({ name, email });
    }

    onUserAdded();
    setName("");
    setEmail("");
    setEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">{editing ? "Salvar Alterações" : "Cadastrar"}</button>
    </form>
  );
};

export default UserForm;