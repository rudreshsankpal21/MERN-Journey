import React from "react";
import users from "../utils/users";
import { Link } from "react-router-dom";
const User = () => {
  return (
    <div>
      {users.map((user) => {
        return (
          <Link to={`/user/${user.id}`}>
            <div className="border-2 p-4 m-4">
              <h1 className="font-bold">
                <b>ID :</b> {user.id}
              </h1>
              <h1>
                <b>Name :</b>
                {user.name}
              </h1>
              <h1>
                <b>Username :</b>
                {user.username}
              </h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default User;
