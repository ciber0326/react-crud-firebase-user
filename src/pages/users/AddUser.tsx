import React, { useState } from "react";
import { createUser } from "../../services/userService";
import { User } from "../../types/User";

const AddUser: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = { name, email };
    await createUser(newUser);
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="mb-4 font-bold text-2xl">Add User</h1>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-3 py-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 border rounded w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 px-4 py-2 rounded text-white">
        Add User
      </button>
    </form>
  );
};

export default AddUser;
