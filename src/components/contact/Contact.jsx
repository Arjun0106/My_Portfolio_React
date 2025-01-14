import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import { MdOutlinePhone } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState("");  // State to hold message status
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset message to ensure no previous messages
    setMessage("");

    // Send form data using EmailJS
    emailjs
      .sendForm(
        'service_11fm65o',  // Your service ID
        'template_147rcpn',  // Your template ID
        formRef.current,     // Form reference
        'jsDMh_bz2yQV9qS_W'  // Your public key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setMessage("Message Sent👍. Thanks, I'll reply ASAP :)");  // Success message
          alert("Message Sent Successfully!");  // Pop-up on success
        },
        (error) => {
          console.log('Error sending email:', error.text);
          setMessage("Oops! Something went wrong. Please try again.");  // Error message
          alert("Error! Please try again.");  // Pop-up on error
        }
      );

    e.target.reset();  // Reset the form fields after submit
};


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me 📬</h2>
      <div className="container contact__container">
      <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Gmail</h4>
            <h5>arjunsiva0106@gmail.com</h5>
          </article>
          <div></div>
          <div></div>
          <article className="contact__option">
          <MdOutlinePhone className="contact__option-icon" />
            <h4>Mobile</h4>
            <h5>+91 9087784674</h5>
          </article>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="email"  // Using email type for better validation
            placeholder="Your Email ID"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>{message}</span>}  {/* Display message here */}
        </form>
      </div>
    </section>
  );
};

export default Contact;