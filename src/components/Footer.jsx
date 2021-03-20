import React from "react";

import {
  Typography,
  AppBar,
  Toolbar,
  Container
} from "@material-ui/core";

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
    <Container maxWidth="md">
      <Toolbar>
      </Toolbar>
    </Container>
        <Typography align='right'  variant="body1" color="inherit">
          © 2021 - Yesica Barros
        </Typography>
  </AppBar>
  );
};

export default Footer;