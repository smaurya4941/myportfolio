import React, { useRef } from "react";
import emailjs from "emailjs-com";
const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_nhs79u3',     // Replace with your actual Service ID
      'template_phly94l',    // Replace with your actual Template ID
      form.current,
      'WR6FMIaER5nd-jwuB'      // Replace with your actual Public Key
    )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Email error:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="bg-blue">
      <div className="max-w-lg p-1 bg-blue shadow-lg rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-amber-300 text-center">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input type="text" name="from_name" placeholder="Your Name"
            className="w-full px-4 py-2 border text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />

          <input type="email" name="from_email" placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />

          <input type="text" name="subject" placeholder="Your Subject"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />

          <textarea name="message" placeholder="Your Message" rows="5"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>

          <button type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
