import React, { useState, useEffect } from "react";
import api from "../api";

const UserList = ({ onUserDeleted, onUserUpdated }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await api.getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, [onUserDeleted, onUserUpdated]);

  const handleDelete = async (id) => {
    await api.deleteUser(id);
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEdit = (user) => {
    onUserUpdated(user);
  };

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Editar</button>
                <button onClick={() => handleDelete(user.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;