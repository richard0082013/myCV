import React from "react";
import { Tab } from 'semantic-ui-react'
import Experience from './Experience'

const panes = [
  { menuItem: 'My Projects', render: () => <Tab.Pane attached={false}><Experience /></Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]

const About = () => <Tab menu={{ pointing: true }} panes={panes} />

export default About;
