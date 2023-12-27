/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Buraque Syed",
  title: "Full-Stack Developer",
  email: "Buraque.Syed@studentambassadors.com",
  gitHub: "https://github.com/Buraquescode",
  linkedIn: "https://www.linkedin.com/in/sayed-buraque-%F0%9F%87%B5%F0%9F%87%B0-1b2098284/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BenuThYYKSgySVDmSt7axvw%3D%3D",
  youTube: "https://www.youtube.com/channel/UC9qvm74ZneSuJRtKpqm3E2Q",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
