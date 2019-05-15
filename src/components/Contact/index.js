import React from "react";
import { Image, List, Icon, Popup } from "semantic-ui-react";
import Styled from "styled-components";
import myImage from "../../assets/image/logo.jpg";
const OutWrapper = Styled.div`
  display: block;
  width:100%
  min-height:100vh;
`;
const ContentWrapper = Styled.div`
  display: block;
  position: relative;
  padding:10vh 0;
  text-align:center;
  min-height:80vh;
`;
const ImageWrapper = Styled(Image)`
margin: 0 auto;
`;
const Contact = () => (
  <OutWrapper>
    <ContentWrapper>
      <ImageWrapper src={myImage} size="medium" circular />
      <h1>Bo Tian</h1>
      <List animated horizontal relaxed="very" style={{ marginTop: "1rem" }}>
        <List.Item>
          <Popup
            content="Follow me on Linkedin."
            trigger={
              <a href="www.linkedin.com/in/bo-tian">
                <Icon style={{ fontSize: "2.5rem" }} name="linkedin" />
              </a>
            }
            position="bottom center"
          />
        </List.Item>
        <List.Item>
          <Popup
            content="Contact me via email"
            trigger={
              <a href="mailto:richard0082013@gmail.com">
                <Icon style={{ fontSize: "2.5rem" }} name="at" />
              </a>
            }
            position="bottom center"
          />
        </List.Item>
        <List.Item>
          <Popup
            content="Follow me on github."
            trigger={
              <a href="https://github.com/richard0082013">
                <Icon style={{ fontSize: "2.5rem" }} name="github" />
              </a>
            }
            position="bottom center"
          />
        </List.Item>
      </List>
    </ContentWrapper>
  </OutWrapper>
);

export default Contact;
