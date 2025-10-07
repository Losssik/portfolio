import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
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
      setTimeout(() => setStatus("null"), 2000);
    }
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setMail(e.target.value)}
          value={mail}
        />
        <label>Message</label>
        <textarea
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <input type="submit" value="Send" />
      </form>
      {status === "success" && <p>message sent </p>}
      {status === "error" && <p>couldn't send message, try again later</p>}
    </>
  );
};

export default ContactForm;
