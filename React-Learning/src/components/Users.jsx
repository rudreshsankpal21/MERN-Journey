import axios from "axios";
import { useEffect, useState } from "react";
const Users = () => {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((user) => {
        setloading(false);
        setusers(user.data);
      })
      .catch((err) => {
        seterror(true);
        setloading(false);
      });
  }, [loading, error]);

  //   Displaying Loading
  if (loading) {
    return (
      <>
        <h1 className="text-green-700 text-3xl text-center"> Loading...</h1>
      </>
    );
  }

  //   Displaying error
  if (error) {
    return (
      <>
        <h1 className="text-red-800 text-3xl text-center">
          Something went wrong
        </h1>
      </>
    );
  }
  return (
    <>
      {/* Displaying users */}
      <div>
        <h1 className="text-4xl font-bold text-center ">User Details</h1>
        <ul>
          {users.map((user) => {
            return (
              <li
                key={user.id}
                className="border-2 p-4 m-4 hover:bg-black hover:text-white transition-all ease-in"
              >
                <h1>
                  <b>Username :</b> {user.username}
                </h1>
                <h1>
                  <b>Name :</b> {user.name}
                </h1>
                <h3>
                  <b>Email :</b> {user.email}{" "}
                </h3>
                <h3>
                  <b>Ph.Number :</b> {user.phone}
                </h3>
                <div>
                  <h1>
                    <b>Works-in :</b> {user.company.name}
                  </h1>
                </div>
                <div className="border-0 m-2 ml-5">
                  <h1 className="font-bold text-2xl">User Address : </h1>
                  <p>
                    <b>Street :</b> {user.address.street}, <b>City :</b>{" "}
                    {user.address.city}, <b>Zipcode :</b> {user.address.zipcode}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Users;
