import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import barclaysLogo from "../../assets/image/barclays.png";
import lendiLogo from "../../assets/image/lendi.png";
import twopiLogo from "../../assets/image/twopi.png";
import AITLogo from "../../assets/image/noImage.png";
class Experience extends Component {
  render() {
    return (
      <Item.Group>
        <Item>
          <Item.Image size="tiny" src={twopiLogo} />

          <Item.Content>
            <Item.Header as="a">Front-end Web Developer</Item.Header>
            <Item.Meta>TwoPi Code (Sydney)</Item.Meta>
            <Item.Meta>Jul 2018 - now</Item.Meta>
            <Item.Description>
              <p>
                As a frontend web developer, I help my client to build a new
                server-side rendering website to replace their existed flask app
                by using react for their company including content show, data
                store and transfer, etc. In the meanwhile, I help client to
                maintain the current flask app. There are two developer in this
                project, and I focus on the frontend build. We use
                “create-react-app” to bootstrap out app. Following with the
                flask app’s UI, we use Ant-design as our UI library to create
                the react components and styling. We use react route v4 to
                declare the routing of our app. We applied redux-query library
                to manage the network state before react hook is released.
                Currently, we will apply react hook more in our app. Jest is the
                main tool for our unit and integration test. By now, our app is
                still waiting for the client to approve to go online.
              </p>
            </Item.Description>
            <Item.Extra>
              Key words: HTML, CSS, ReactJS, Redux, Ant-Design, python
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size="tiny" src={lendiLogo} />

          <Item.Content>
            <Item.Header as="a">Full Stack Web Developer</Item.Header>
            <Item.Meta>Lendi Pty Ltd (Sydney)</Item.Meta>
            <Item.Meta>Jan 2017 - Jun 2018</Item.Meta>
            <Item.Description>
              <p>
                As a full-stack Javascript developer, I help deliver
                features/functionalities including Lendi Inspire, 3rd -party CMS
                system integration, core functionalities in Lendi Platform such
                as blog, landing pages, content show, and SEO work etc. For the
                back-end, we used restifyJS to create a simple API for our blog
                app to communicate with the CMS. Also, as marketing purpose, I
                used react and Ant design to create some landing pages to show
                some education contents.
              </p>
            </Item.Description>
            <Item.Extra>
              Key words: HTML, CSS, NodeJS, ReactJS, Redux, Restify, GraphQL
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size="tiny" src={AITLogo} />

          <Item.Content>
            <Item.Header as="a">Junior Web Developer</Item.Header>
            <Item.Meta>AIT Software Development company (ShangHai)</Item.Meta>
            <Item.Meta>Jan 2014 - Sep 2016</Item.Meta>
            <Item.Description>
              <p>
                As a junior web developer, I use backbone, HTML and CSS for
                daily development. Responsibilities are such as design frontend
                code in MVC paradigm,develop new UI features,code optimization,
                ensure the technical feasibility of UI/UX designs,make ajax
                calls to service endpoints,assure that all user input is
                validated before submitting to back-end Collaborate with other
                team members and stakeholders
              </p>
            </Item.Description>
            <Item.Extra>Key words: HTML, CSS, TDD</Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size="tiny" src={barclaysLogo} />

          <Item.Content>
            <Item.Header as="a">Technical Support</Item.Header>
            <Item.Meta>BTCC (ShangHai)</Item.Meta>
            <Item.Meta>Sep 2009 - OCT 2013 </Item.Meta>
            <Item.Description>
              <p>
                Work as a contractor in BTCC, role as Software Engineer in
                card’s team. Supporting the Daily batch running under tester’s
                requirements in back-end Vision Plus system using mainframe.
                Write codes with JCL and Cobol programming language to upgrade
                some functions of the products.
              </p>
            </Item.Description>
            <Item.Extra>Key words: Mainframe, COBOL, JCL</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}
export default Experience;
