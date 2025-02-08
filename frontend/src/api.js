const API_URL = "http://localhost:3000/users";

const api = {
  getUsers: async () => {
    const response = await fetch(API_URL);
    return response.json();
  },
  createUser: async (user) => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
  },
  updateUser: async (id, updatedUser) => {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });
  },
  deleteUser: async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  },
};

export default api;