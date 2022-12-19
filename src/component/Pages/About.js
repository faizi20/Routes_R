import React, { useContext, useEffect } from "react";
import HeroSection from "./HeroSection";

import { AppContext } from "../store/context";

function About() {
  // const data = {
  //   name: "FAIZAN KHAN",
  //   image: About1,
  // };

  const { updateAboutPage } = useContext(AppContext);

  useEffect(() => {
    updateAboutPage();
  });

  return <HeroSection />;
}

export default About;
