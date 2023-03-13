import AboutMe from "./components/AboutMe.jsx";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Links from "./components/Links";
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <div className="App">
       <NavBar /> 
      <Home />
      <AboutMe />
      <Portfolio />
      <Experience />
      <Contact />
      <Links />
    </div>
  );
}

export default App;
