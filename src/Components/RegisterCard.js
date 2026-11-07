import React, { useState } from "react";
import "../styles/RegisterCard.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Stops the browser from refreshing the page.

    if (name.trim() === "" || email.trim() === "") {
      alert("Please enter both your name and email.");
      return;
    }

    // JSON.stringify converts an object into a JSON string.
    const contact = { name, email };
    alert(JSON.stringify(contact, null, 2));

    setName("");
    setEmail("");
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

        <button type="submit">Register</button>
      </form>
    </section>
  );
}
export default ContactForm;