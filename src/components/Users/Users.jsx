import { useState, useEffect } from "react";
import { getUsers } from "../../api";
import UserCard from "../UserCard/UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
    });
  }, []);

  return (
    <div>
      <ul>
        {users.map((user, i) => {
          return <UserCard user={user} key={i} />;
        })}
      </ul>
    </div>
  );
};

export default Users;
