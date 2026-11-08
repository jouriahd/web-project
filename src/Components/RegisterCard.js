import React, { useState } from "react";
import "../styles/RegisterCard.css";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword]= useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Stops the browser from refreshing the page.

    if (name.trim() === "" || email.trim() === "" || password.trim() === "" ) {
      alert("name, email, password are required for registration");
      return;
    }

    // JSON.stringify converts an object into a JSON string.
    const contact = { name, email,password };
    alert(JSON.stringify(contact, null, 2));

    setName("");
    setEmail("");
    setPassword("");
  }
  const [showLogIn, setShowLogIn] = useState(false);
  const handleLogInClick = () => {
       setShowLogIn(true);
  }
   if (showLogIn) {
    return <LogInForm />;
  }
  return (
    <section className="register-card">
      <h2>Create your account</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="creat your password"
            required
          />
        </label>

        <button type="submit">Register</button>
      </form> 
      <span onClick={handleLogInClick} className="login-link">
        Already have an account? Log In
      </span>
    </section>
  );
}



export const LogInForm=()=> {
  const [email, setEmail] = useState("");
  const [password,setPassword]=useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Stops the browser from refreshing the page.

    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter both your email and passsword.");
      return;
    }

    // JSON.stringify converts an object into a JSON string.
    const contact = { email,password };
    alert(JSON.stringify(contact, null, 2));

   setPassword("");
    setEmail("");
    } 
    const [showRegister, setShowRegister] = useState(false);
    const handleLogInClick = () => {
       setShowRegister(true);
   }
   if (showRegister) {
    return <ContactForm />;
   }

     return(
     <section className="register-card">
      <h2>Log In</h2> 

     <form onSubmit={handleSubmit}>
       
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            required
          />
        </label>
        <label>
          Password
          <input
            type="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            required
          />
        </label>

        <button type="submit">Register</button>
        <span onClick={handleLogInClick} className="login-link">
        doesnt have an account? Register
       </span>
      </form> 
    </section>
  );
};
