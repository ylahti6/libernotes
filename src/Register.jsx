import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const [currentPage, setCurrentPage] = useState("login");

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <div className="auth-form-container">
      <h1>Register</h1>
      <p>Remember everything important.</p>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          id="name"
          placeholder="Name"
        />

        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          id="email"
        />

        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
        />
        <button className="strawberry-button" type="submit">
          Register
        </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account?
      </button>

      {/* Continue as a quest link */}
      
    </div>
    
  );
};
