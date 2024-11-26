import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUsers, updateUser } from "../../services/userService"; // Import services
import { User } from "../../types/User"; // Import the User interface

const EditUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<Partial<User>>({ name: "", email: "" });

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    const users = await getUsers(); // Fetch all users
    const userToEdit = users.find((u) => u.id === id); // Find the specific user by ID
    if (userToEdit) {
      setUser(userToEdit);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id && user.name && user.email) {
      await updateUser(id, { name: user.name, email: user.email });
      navigate("/"); // Redirect back to the user list
    }
  };

  return (
    <div className="mx-auto p-4 max-w-md">
      <h2 className="mb-4 font-bold text-2xl">Edit User</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium text-sm">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name || ""}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email || ""}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
