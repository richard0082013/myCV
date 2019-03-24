import React from "react";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import Home from "../../components/Home";
import About from "../../components/About";
import Contact from "../../components/Contact";
const Content = () => (
  <Container
    text
    style={{
      marginTop: "10em"
    }}
  >
    <Route exact={true} path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Container>
);

export default Content;
