
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ei0p6k4",    // replace with your Service ID
        "template_to429vf",   // replace with your Template ID
        formData,             // data to send
        "VAb18bRd4G5Dy8oqT"     // replace with your Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-cream min-h-screen flex items-center justify-center px-4 py-10">
      <div className="bg-white max-w-lg w-full p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-serif text-maroon mb-6 text-center">
          Contact Me
        </h1>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-maroon"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-maroon"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-maroon"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-maroon text-white font-semibold py-3 rounded hover:bg-accent transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
