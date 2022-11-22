import React, { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errorMessage) {
      alert("Submit Form")
      console.log("submit form", formState)
    }
  }

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return re.test(String(email).toLowerCase())
  }

  const handleChange = (event) => {
    if (event.target.name === "email") {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage("Please enter a valid email!")
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`)
      } else {
        setErrorMessage("")
      }
      if (!errorMessage) {
        setFormState({ ...formState, [event.target.name]: event.target.value });
        console.log("Handle Form", formState);
      }
    }
  }

  return (

    <section className="container text-color">
      <h1>Contact Form</h1>
      
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-spacing">
          <label htmlFor="name">Name:</label>
          <input className="formcontrol" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        
        <div className="form-spacing">
          <label htmlFor="email">Email Address:</label>
          <input className="formcontrol" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        
        <div className="form-spacing">
          <label htmlFor="message">Message:</label>
          <textarea className="formcontrol" name="message" defaultValue={message} onBlur={handleChange} rows="7" />
        </div>
        
        <br></br>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        <div className="form-spacing">
          <button type="submit">Send</button>
        </div>
      
      </form>
    
    </section>

  )

}

export default Contact;