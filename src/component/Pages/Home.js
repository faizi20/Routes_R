import React, { useContext, useEffect } from "react";
import HeroSection from "./HeroSection";
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

  return <HeroSection />;
}

export default Home;
