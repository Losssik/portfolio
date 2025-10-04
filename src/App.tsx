import "./assets/main.scss";
import AboutMe from "./assets/components/AboutMe/AboutMe";
import Projects from "./assets/components/Projects/Projects";
import Description from "./assets/components/Description/Description";

function App() {
  const projects = [
    {
      title: "Portfolio",
      description: "Personal portfolio site built with React and Sass",
    },
    {
      title: "Weather App",
      description: "App showing live weather data using OpenWeather API",
    },
    {
      title: "Portfolio",
      description: "Personal portfolio site built with React and Sass",
    },
    {
      title: "Weather App",
      description: "App showing live weather data using OpenWeather API",
    },
    {
      title: "Portfolio",
      description: "Personal portfolio site built with React and Sass",
    },
    {
      title: "Weather App",
      description: "App showing live weather data using OpenWeather API",
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
