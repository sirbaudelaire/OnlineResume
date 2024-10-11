import React from "react";
import home from "../Pages/Home.module.css";
import Navbar from "../Components/Desktop/Navbar";
import { Box } from "@mantine/core";
import { AnimatedBackground } from "animated-backgrounds";

export default function Home() {
  return (
    <>
      <Box className={home.container}>
        <AnimatedBackground animationName="auroraBorealis" />
        <Box className={home.navbarContainer}>
          <Navbar />
        </Box>
      </Box>
    </>
  );
}
