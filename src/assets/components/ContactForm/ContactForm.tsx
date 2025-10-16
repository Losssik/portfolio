import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

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
      <motion.div
        className="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="contact__heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Contact me
        </motion.h3>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact__form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.label
            className="contact__label"
            htmlFor="email"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Email
          </motion.label>
          <motion.input
            id="email"
            type="email"
            name="email"
            placeholder="Your email..."
            onChange={(e) => setMail(e.target.value)}
            value={mail}
            className="contact__input"
            required
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          />

          <motion.label
            className="contact__label"
            htmlFor="message"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Message
          </motion.label>
          <motion.textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="contact__textarea"
            required
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          />

          <motion.input
            type="submit"
            value="Send Message"
            className="contact__button"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
          />
        </motion.form>
        <AnimatePresence>
          {status === "success" && (
            <motion.p
              className="contact__status contact__status--success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              Message sent!
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              className="contact__status contact__status--error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              Couldn't send message. Try again later.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="contact-info"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="contact-info__heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          Get in touch
        </motion.h3>
        <ul className="contact-info__list">
          <motion.li
            className="contact-info__item"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <MdEmail className="contact-info__icon" />
            <a href="mailto:przemek.bialkwno@gmail.com">
              przemek.bialkwno@gmail.com
            </a>
          </motion.li>
          <motion.li
            className="contact-info__item"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <FaPhoneAlt className="contact-info__icon" />
            <a href="tel:+48530034701">530 034 701</a>
          </motion.li>
          <motion.li
            className="contact-info__item"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <FaGithub className="contact-info__icon" />
            <a
              href="https://github.com/Losssik"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info__link"
            >
              GitHub
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </div>
  );
};

export default ContactSection;
