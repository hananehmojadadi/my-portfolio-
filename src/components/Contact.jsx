import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("contactForm"));
    if (saved) setForm(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(form));
  }, [form]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email format";
    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) setErrors(validationErrors);
    else {
      setErrors({});
      setShowModal(true);
      setForm({ name: "", email: "", message: "" });
      localStorage.removeItem("contactForm");
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact <span>Me</span></h2>
      <div className="contact-form-wrapper">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Your Name</label>
            <input name="name" value={form.name} onChange={handleChange} />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label>Your Email</label>
            <input name="email" value={form.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={form.message} onChange={handleChange}></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <div className="form-submit">
            <button type="submit">Send Message</button>
          </div>
        </form>

        {showModal && (
          <div className="modal">
            <p>Thank you! Your message was sent.</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
