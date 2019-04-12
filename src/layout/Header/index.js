import React from "react";
import { Container, Image, Menu } from "semantic-ui-react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
const Header = () => (
  <Menu inverted>
    <Container>
      <Link to="/">
        <Menu.Item as="a" header>
          <Image size="mini" src={logo} style={{ marginRight: "1.5em" }} />
          Bo Tian (Richard)
        </Menu.Item>
      </Link>
      <Menu.Item>
        <Link to="/about">About me</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/contact">Contact me</Link>
      </Menu.Item>
    </Container>
  </Menu>
);

export default Header;
