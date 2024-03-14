import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const { setLogin } = useContext(LoginContext);

  return (
    <div className="userCard">
      <p>Username: {user.username}</p>
      <p>Name: {user.name}</p>
      <img src={user.avatar_url} alt="" />
      <button
        onClick={() => {
          setLogin(user);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default UserCard;
