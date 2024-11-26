import React from "react";
import UserList from "./pages/users/UserList";
import AddUser from "./pages/users/AddUser";

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 p-4 min-h-screen">
      <AddUser />
      <UserList />
    </div>
  );
};

export default App;
