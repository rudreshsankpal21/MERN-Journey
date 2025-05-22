import React, { useState } from "react";
const UserRegistrationForm = () => {
  // Handling states
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [branch, setBranch] = useState("");
  const [salary, setSalary] = useState("");
  const [joinedFrom, setJoinedFrom] = useState("");

  //   Handling User Inputs
  const handleUserName = (e) => {
    setName(e.target.value);
  };
  const handleUserAge = (e) => {
    setAge(e.target.value);
  };
  const handleUserBranch = (e) => {
    setBranch(e.target.value);
  };
  const handleUserSalary = (e) => {
    setSalary(e.target.value);
  };
  const handleUserJoinedFrom = (e) => {
    setJoinedFrom(e.target.value);
  };

  // Handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, age, branch, salary, joinedFrom });
  };
  return (
    <div>
      <h1>User Registration</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label> Name :</label>
            <input
              className="border-2 p-1 m-1"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleUserName}
            />
          </div>

          <div>
            <label>Age :</label>
            <input
              className="border-2 p-1 m-1"
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={handleUserAge}
            />
          </div>

          <div>
            <label>Branch :</label>
            <select
              value={branch}
              onChange={handleUserBranch}
              className="border-2 p-1 m-1"
            >
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Full-Stack">Full-Stack</option>
              <option value="AI-ML">AI-ML</option>
              <option value="App Dev">App Dev</option>
              <option value="Cyber Security">Cyber Security</option>
            </select>
          </div>

          <div>
            <label>Salary :</label>
            <input
              className="border-2 p-1 m-1"
              type="number"
              placeholder="Enter Your Salary"
              value={salary}
              onChange={handleUserSalary}
            />
          </div>

          <div>
            <label>JoinedFrom :</label>
            <input
              className="border-2 p-1 m-1"
              type="date"
              value={joinedFrom}
              onChange={handleUserJoinedFrom}
            />
          </div>
          <div>
            <button
              type="submit"
              className="border-2 p-1 m-1 bg-black text-white font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegistrationForm;
