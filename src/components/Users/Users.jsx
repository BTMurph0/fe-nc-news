import { useState, useEffect } from "react";
import { getUsers } from "../../api";
import UserCard from "../UserCard/UserCard";
import Loading from "../Loading/Loading";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;

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
