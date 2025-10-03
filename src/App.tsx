import "./assets/main.scss";
import AboutMe from "./assets/components/AboutMe/AboutMe";
import Projects from "./assets/components/Projects/Projects";

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
    </div>
  );
}

export default App;
