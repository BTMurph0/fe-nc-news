import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const { setLogin } = useContext(LoginContext);

  return (
    <div onClick={() => {
      setLogin(user);
    }} className="userCard">
      <p>Username: {user.username}</p>
      <p>Name: {user.name}</p>
      <img src={user.avatar_url} alt="" />
    </div>
  );
};

export default UserCard;
