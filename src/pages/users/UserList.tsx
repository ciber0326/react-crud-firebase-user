import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../services/userService";
import { User } from "../../types/User";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleDelete = async (id: string) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div className="mx-auto container">
      <div className="p-4">
        <h1 className="mb-4 font-bold text-2xl">User List</h1>
        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded"
            >
              <span>{user.name} - {user.email}</span>
              <button
                onClick={() => user.id && handleDelete(user.id)}
                className="bg-red-500 px-3 py-1 rounded text-white"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
