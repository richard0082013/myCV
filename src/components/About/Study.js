import React from "react";
import { Icon, Step, List, Image } from "semantic-ui-react";
import uowLogo from "../../assets/image/uow.png";
const Study = () => (
  <Step.Group>
    <Step completed style={{ paddingLeft: "18px", paddingRight: "18px" }}>
      <Icon name="checkmark" />
      <Step.Content>
        <Step.Title>Bachelor Degree (Computer Science)</Step.Title>
        <List>
          <List.Item>
            <Image avatar src={uowLogo} />
            <List.Content>
              <List.Header as="a">University of Wollongong</List.Header>
              <List.Description style={{ fontWeight: "bold" }}>
                Feb 2004 - Nov 2006
              </List.Description>
              <List.Description>
                The education was mainly C++ based programming,
              </List.Description>
              <List.Description>
                I also learned about SQL,COBOL,JavaScript and more.
              </List.Description>
              <List.Description>
                Here I learned about software design, OOP, web
                <p>and user experience and design.</p>
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Step.Content>
    </Step>

    <Step completed style={{ paddingLeft: "18px", paddingRight: "18px" }}>
      <Icon name="checkmark" />
      <Step.Content>
        <Step.Title>Master Degree (Information Technology)</Step.Title>
        <List>
          <List.Item>
            <Image avatar src={uowLogo} />
            <List.Content>
              <List.Header as="a">University of Wollongong</List.Header>
              <List.Description style={{ fontWeight: "bold" }}>
                Feb 2007 - Nov 2007
              </List.Description>
              <List.Description>
                The education was mainly theory course about IT and
              </List.Description>
              <List.Description>
                communication. I also learned about 3D animation design,
                <p>network security knowledge and e-business.</p>
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Step.Content>
    </Step>
    <Step style={{ paddingLeft: "37px", paddingRight: "37px" }}>
      <Icon name="code" />
      <Step.Content>
        <Step.Title>Working</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
);

export default Study;
