import React, { useContext, useEffect } from "react";
import HeroSection from "./HeroSection";
import Service from "./Service";
import Contact from "./Contact";
import { AppContext } from "../store/context";

function Home() {
  // const data = {
  //   name: "Frontend Developer",
  //   image: Hero,
  // };

  const { updateHomePage } = useContext(AppContext);

  useEffect(() => {
    updateHomePage();
  });

  return (
    <>
      <HeroSection />
      <Service />
      <Contact />
    </>
  );
}

export default Home;
