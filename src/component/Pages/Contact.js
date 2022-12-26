import React from "react";

function Contact() {
  return (
    <section className="contact py-5">
      <h2 className="common-heading">Feel Free to Contact us </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1521.8173823121238!2d67.06224637730419!3d24.880507488833086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f13eeb2f44b%3A0x94ad46f272469a09!2sHIIT-FITT!5e0!3m2!1sen!2s!4v1671450966019!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="contact-form">
        <form
          action="https://formspree.io/f/xayzwerk"
          method="POST"
          className="contact-input"
        >
          <div class="mb-3">
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />
          </div>
          <div class="mb-3">
            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>
          </div>
          <input type="submit" value="send" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
