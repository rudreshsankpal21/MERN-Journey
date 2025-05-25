import React from "react";
import { useParams } from "react-router-dom";
import users from "../utils/users";
const UserDets = () => {
  const userId = useParams().id;
  return (
    <div>
      <div>
        {users.map((user) => {
          if (user.id == userId) {
            return (
              <div key={user.id} className="border-2 p-4 m-4">
                <div>
                  <h1>
                    <b>User Details</b>
                  </h1>
                  <h1>{user.id}</h1>
                  <h1>{user.name}</h1>
                  <h1>{user.username}</h1>
                  <h1>{user.email}</h1>
                  <h1>{user.phone}</h1>
                </div>
                <div>
                  <h1>
                    <b>Works-in</b>
                  </h1>
                  <h1>{user.company.name}</h1>
                  <h1>{user.company.catchPhrase}</h1>
                  <h1>{user.company.bs}</h1>
                </div>
                <div>
                  <h1>
                    <b>Address</b>
                  </h1>
                  <h1>{user.address.street}</h1>
                  <h1>{user.address.suite}</h1>
                  <h1>{user.address.city}</h1>
                  <h1>{user.address.zipcode}</h1>
                  <h1>{user.address.geo.lat}</h1>
                  <h1>{user.address.geo.lng}</h1>
                </div>
                <div>
                  <h1>
                    <b>Website</b>
                  </h1>
                  <h1>{user.website}</h1>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default UserDets;
