import React, { Component } from "react";
import { Image, Item } from "semantic-ui-react";
import barclaysLogo from "../../assets/image/barclays.png";
import lendiLogo from "../../assets/image/lendi.png";
import twopiLogo from "../../assets/image/twopi.png";
class Experience extends Component {
  render() {
    return (
      <Item.Group>
        <Item>
          <Item.Image size="tiny" src={twopiLogo} />

          <Item.Content>
            <Item.Header as="a">Front-end Web Developer</Item.Header>
            <Item.Meta>Jul 2018 - now</Item.Meta>
            <Item.Description>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </Item.Description>
            <Item.Extra>
              Key words: HTML, CSS, ReactJS, Redux, Ant-Design
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size="tiny" src={lendiLogo} />

          <Item.Content>
            <Item.Header as="a">Full Stack Web Developer</Item.Header>
            <Item.Meta>Jan 2017 - Jun 2018</Item.Meta>
            <Item.Description>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </Item.Description>
            <Item.Extra>
              Key words: HTML, CSS, NodeJS, ReactJS, Redux, Restify, GraphQL
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size="tiny" src={barclaysLogo} />

          <Item.Content>
            <Item.Header as="a">Technical Support</Item.Header>
            <Item.Meta>Sep 2009 - Mar 2012 </Item.Meta>
            <Item.Description>
              <Image
                src={
                  "https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
                }
              />
            </Item.Description>
            <Item.Extra>Key words: Mainframe, COBOL, JCL</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}
export default Experience;
