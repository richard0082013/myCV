import React from "react";
import { Container, Image, List, Segment } from "semantic-ui-react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
const Footer = () => (
  <Segment
    inverted
    vertical
    style={{ margin: "5em 0em 0em", padding: "1em 0em" }}
  >
    <Container textAlign="center">
      <Image centered size="mini" src={logo} />
      <List horizontal inverted divided link size="small">
        <List.Item>
          <Link to="/">Home</Link>
        </List.Item>
        <List.Item>
          <Link to="/contact">Contact Me</Link>
        </List.Item>
        <List.Item>
          <Link to="/about">About Me</Link>
        </List.Item>
        <List.Item>
          <a href="https://github.com/richard0082013">github</a>
        </List.Item>
      </List>
    </Container>
  </Segment>
);

export default Footer;
