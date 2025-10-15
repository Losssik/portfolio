import { motion } from "framer-motion";
import photoOfMe from "../../photos/ja.jpg";

const Description = () => {
  return (
    <>
      {/* Nagłówek */}
      <motion.h2
        className="header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        about me
      </motion.h2>

      <section className="description">
        <div className="description__flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src={photoOfMe} className="description__photo" alt="Me" />
          </motion.div>
          <motion.div
            className="description__text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              I am a self-taught frontend developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              passionate about building interactive and accessible web
              applications. My goal is to become a full-stack developer.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Description;
