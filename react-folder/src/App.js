import NavBar from "./NavBar";
import LandingPage from './LandingPage';
import About from "./About";
import Skills from "./Skills";
import WhatIOffer from "./WhatIOffer";
import SourceCode from "./SourceCode";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-content">
        <LandingPage />
        <About />
        <WhatIOffer />
        <Skills />
        <SourceCode />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
