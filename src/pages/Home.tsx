import "../assets/main.scss";
import AboutMe from "../components/AboutMe/AboutMe";
import Projects from "../components/Projects/Projects";
import Description from "../components/Description/Description";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import Skills from "../components/Skills/Skills";

import { PiCassetteTapeLight } from "react-icons/pi";
import {
  IoBookOutline,
  IoRestaurantOutline,
  IoBagCheckOutline,
} from "react-icons/io5";
import { GiBoatFishing, GiSushis } from "react-icons/gi";

const Home = () => {
  const projects = [
    {
      title: "clean-read",
      logo: <IoBookOutline />,
      tags: ["MERN", "full-stack", "react", "jwt"],
      github: "https://github.com/przemyslaw-bialk/clean-read",
      live_version: "https://clean-read.vercel.app/",
    },
    {
      title: "tiste",
      tags: ["react", "scrapping", "recharts", "leaflet"],
      github: "https://github.com/przemyslaw-bialk/Tiste-TS",
      logo: <GiBoatFishing />,
      live_version: "https://tiste.pl/",
    },
    {
      title: "sea & roll",
      tags: ["tailwind", "based on design", "commercial project"],
      logo: <GiSushis />,
      github: "https://github.com/przemyslaw-bialk/sushi-restaurant",
      live_version: "https://searoll.pl/",
    },
    {
      title: "tapes-transfer",
      description: "company site built with REACT",
      tags: ["react", "styled-components", "commercial project"],
      logo: <PiCassetteTapeLight />,
      github: "https://github.com/przemyslaw-bialk/kasety",
      live_version: "https://tapestransfer.com/",
    },
    {
      title: "restauracja leśna",
      tags: ["wordpress", "AI implementaion", "commercial project"],
      logo: <IoRestaurantOutline />,
      live_version: "https://restauracjalesna.com/",
    },
    {
      title: "miropak",
      tags: ["wordpress", "woocommerce", "apilo", "commercial project"],
      logo: <IoBagCheckOutline />,
      live_version: "https://miropak.pl/",
    },
  ];

  return (
    <div style={{ padding: "10px" }}>
      <AboutMe />
      <Projects projects={projects} />
      <Description />
      <Skills />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
