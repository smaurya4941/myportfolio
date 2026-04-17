import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        'service_nhs79u3',
        'template_phly94l',
        form.current,
        'WR6FMIaER5nd-jwuB'
      )
      .then(() => {
        setStatus("Message sent successfully.");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Email error:", error);
        setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-white">Send a message</h2>
      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
        I usually respond to relevant opportunities, collaboration requests, and project inquiries.
      </p>

      <form ref={form} onSubmit={sendEmail} className="mt-4 space-y-3">
        <input
          type="text"
          name="from_name"
          placeholder="Your name"
          className="w-full rounded-[1rem] border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-2.5 text-sm text-white placeholder:text-[var(--color-muted)] focus:border-[rgba(243,179,93,0.35)] focus:outline-none"
          required
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your email"
          className="w-full rounded-[1rem] border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-2.5 text-sm text-white placeholder:text-[var(--color-muted)] focus:border-[rgba(243,179,93,0.35)] focus:outline-none"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full rounded-[1rem] border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-2.5 text-sm text-white placeholder:text-[var(--color-muted)] focus:border-[rgba(243,179,93,0.35)] focus:outline-none"
          required
        />

        <textarea
          name="message"
          placeholder="Tell me a little about your project or opportunity"
          rows="4"
          className="w-full rounded-[1rem] border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-2.5 text-sm text-white placeholder:text-[var(--color-muted)] focus:border-[rgba(243,179,93,0.35)] focus:outline-none"
          required
        />

        <button
          type="submit"
          className="inline-flex rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#09111f] transition hover:bg-[#ffc779]"
        >
          Send Message
        </button>

        {status && <p className="text-sm text-[var(--color-muted)]">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
