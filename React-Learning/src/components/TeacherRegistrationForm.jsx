import React, { useState } from "react";

const TeacherRegistrationForm = () => {
  // Handling states
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [subject, setSubject] = useState("");
  const [consent, setConsent] = useState("");

  //   Handling use Inputs
  const handleTeacherName = (e) => {
    setName(e.target.value);
  };
  const handleTeacherAge = (e) => {
    setAge(e.target.value);
  };
  const handleTeacherSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleTeacherConsent = (e) => {
    setConsent(e.target.checked);
  };

  //   Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, age, subject, consent });
  };
  return (
    <div>
      <h1>Teacher Registration Form</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name : </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleTeacherName}
              className="border-2 p-2 m-2"
            />
          </div>
          <div>
            <label>Age : </label>
            <input
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={handleTeacherAge}
              className="border-2 p-2 m-2"
            />
          </div>
          <div>
            <label>Subject</label>
            <select onChange={handleTeacherSubject} value={subject}>
              <option value="Science">Science</option>
              <option value="Maths">Maths</option>
              <option value="English">English</option>
              <option value="Biology">Biology</option>
            </select>
          </div>
          <div>
            <label>Consent</label>
            <input
              type="checkbox"
              checked={consent}
              onChange={handleTeacherConsent}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherRegistrationForm;
