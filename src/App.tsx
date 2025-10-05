import "./assets/main.scss";
import AboutMe from "./assets/components/AboutMe/AboutMe";
import Projects from "./assets/components/Projects/Projects";
import Description from "./assets/components/Description/Description";

import myImg from "./assets/photos/ja.jpg";
import imgCleanRead from "./assets/photos/clean_read2.jpg";
import imgTapesTrasfer from "./assets/photos/tapes_transfer1.jpg";

function App() {
  const projects = [
    {
      title: "tapes-transfer",
      description: "company site built with REACT",
      image: imgTapesTrasfer,
      tags: ["test", "tagow"],
    },
    {
      title: "clean-read",
      description: "read, add, generate your favorites articles",
      image: imgCleanRead,
    },
    {
      title: "Portfolio",
      description: "Personal portfolio site built with React and Sass",
      image: myImg,
    },
    {
      title: "Weather App",
      description: "App showing live weather data using OpenWeather API",
      image: myImg,
    },
    {
      title: "Portfolio",
      description: "Personal portfolio site built with React and Sass",
      image: myImg,
    },
    {
      title: "Weather App",
      description: "App showing live weather data using OpenWeather API",
      image: myImg,
    },
  ];

  return (
    <div className="$container-width">
      <AboutMe />
      <Projects projects={projects} />
      <Description />
    </div>
  );
}

export default App;
