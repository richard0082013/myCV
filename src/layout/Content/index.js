import React from "react";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import Home from "../../components/Home";
import About from "../../components/About";
import Contact from "../../components/Contact";
import styled from "./styled.module.css"
const Content = () => (
  <Container className={styled.containerWrapper}>
    <Route exact={true} path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Container>
);

export default Content;
