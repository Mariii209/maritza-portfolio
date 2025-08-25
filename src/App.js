import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import WhatDrivesMe from "./WhatDrivesMe";
import Skills from "./Skills";
import Projects from "./Projects";
import ClientWork from "./ClientWork";
import Education from "./Education";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <WhatDrivesMe />
      <Skills />
      <Projects />
      <ClientWork />
      <Education />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
