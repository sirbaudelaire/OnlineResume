import React from "react";
import navbar from "../Desktop/Navbar.module.css";
import { Box, Text, UnstyledButton, Divider } from "@mantine/core";

export default function Navbar() {
  return (
    <>
      <Box display="flex" className={navbar.container}>
        <Box>
          <Text size="xl" className={navbar.logoName}>
            Online Resume
          </Text>
        </Box>
        <Box className={navbar.navItems}>
          <UnstyledButton style={{ marginRight: '0.6em' }}>Home</UnstyledButton>
          <Divider color='#d3d3d3' orientation='vertical' style={{ marginRight: '0.6em' }}/>
          <UnstyledButton style={{ marginRight: '0.6em' }}>About</UnstyledButton>
          <Divider color='#d3d3d3' orientation='vertical' style={{ marginRight: '0.6em' }}/>
          <UnstyledButton>Projects</UnstyledButton>
        </Box>
      </Box>
    </>
  );
}
