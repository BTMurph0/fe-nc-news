import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const { setLogin } = useContext(LoginContext);

  return (
    <article onClick={() => {
      setLogin(user);
    }} className="userCard">
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <img id="userImg" src={user.avatar_url} alt={user.name}/>
    </article>
  );
};

export default UserCard;
