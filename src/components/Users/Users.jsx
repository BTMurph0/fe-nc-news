import { useState, useEffect } from "react";
import { getUsers } from "../../api";
import UserCard from "../UserCard/UserCard";
import Loading from "../Loading/Loading";
import "./Users.css";

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
      <h2 id="welcomeHeader">Welcome to NC News</h2>
      <p id="selectUser">Select a user to login.</p>
    <div className="usersList">
      {users.map((user, i) => {
        return (
          <div>
            <UserCard user={user} key={i} />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Users;
