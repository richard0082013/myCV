import React from "react";
import { Tab } from "semantic-ui-react";
import Experience from "./Experience";
import Study from "./Study";

const panes = [
  {
    menuItem: "My Projects",
    render: () => (
      <Tab.Pane attached={false}>
        <Experience />
      </Tab.Pane>
    )
  },
  {
    menuItem: "My Studies",
    render: () => (
      <Tab.Pane attached={false}>
        <Study />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Top Skills",
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>
  }
];

const About = () => <Tab menu={{ pointing: true }} panes={panes} />;

export default About;
