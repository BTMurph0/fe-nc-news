import { useState, useEffect, useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { getUsers } from "../../api";
import UserCard from "../UserCard/UserCard";
import Loading from "../Loading/Loading";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { login } = useContext(LoginContext);

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
      <p id="selectUser">{login.username === "guest" ? "You are logged in as guest. Select a user to login in order to vote and comment on articles." : `You are logged in as ${login.username}.`}  </p>
    <div className="usersList">
      {users.map((user, i) => {
        return (
          <div user={user} key={i}>
            <UserCard user={user} key={i} />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Users;
