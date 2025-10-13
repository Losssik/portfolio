import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  const [mail, setMail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<"success" | "error" | "null">("null");
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      );
      setMail("");
      setMessage("");
      setStatus("success");
    } catch {
      setMail("");
      setMessage("");
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("null"), 2500);
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact">
        <h3 className="contact__heading">Contact me</h3>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <label className="contact__label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email..."
            onChange={(e) => setMail(e.target.value)}
            value={mail}
            className="contact__input"
            required
          />

          <label className="contact__label" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="contact__textarea"
            required
          />

          <input
            type="submit"
            value="Send Message"
            className="contact__button"
          />
        </form>

        {status === "success" && (
          <p className="contact__status contact__status--success">
            Message sent!
          </p>
        )}
        {status === "error" && (
          <p className="contact__status contact__status--error">
            Couldn't send message. Try again later.
          </p>
        )}
      </div>

      <div className="contact-info">
        <h3 className="contact-info__heading">Get in touch</h3>
        <ul className="contact-info__list">
          <li className="contact-info__item">
            <MdEmail className="contact-info__icon" />
            <a href="mailto:przemek.bialkwno@gmail.com">
              przemek.bialkwno@gmail.com
            </a>
          </li>
          <li className="contact-info__item">
            <FaPhoneAlt className="contact-info__icon" />
            <a href="tel:+48530034701">530 034 701</a>
          </li>
          <li className="contact-info__item">
            <FaGithub className="contact-info__icon" />
            <a
              href="https://github.com/Losssik"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info__link"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactSection;
