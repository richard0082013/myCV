import React from "react";
import { Image, Item } from "semantic-ui-react";
import barclaysLogo from "../../assets/image/barclays.png";
import lendiLogo from "../../assets/image/lendi.png";
import twopiLogo from "../../assets/image/twopi.png";
const Experience = () => (
  <Item.Group>
    <Item>
      <Item.Image size="tiny" src={twopiLogo} />

      <Item.Content>
        <Item.Header as="a">Header</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size="tiny" src={lendiLogo} />

      <Item.Content>
        <Item.Header as="a">Header</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
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

export default Experience;
