import React from "react";
import { Grid, Image, Card } from "semantic-ui-react";
import myImage from "../../assets/image/logo.png";
import TypedReactDemo from "./TypedReactDemo";
const description = ["Welcome aboard!"].join(" ");
const Home = () => (
  <div>
    <Grid style={{ paddingTop: "5rem" }}>
      <Grid.Column width={4}>
        <Image src={myImage} size="medium" circular />
      </Grid.Column>
      <Grid.Column width={12}>
        <Card style={{ width: "100%", boxShadow: "none" }}>
          <Card.Content header="Hi there..." />
          <Card.Content
            style={{ padding: "2rem 0 2rem 0" }}
            description={description}
          />
        </Card>
      </Grid.Column>
    </Grid>
    <TypedReactDemo
      strings={[
        "I am <i>Richard Bo Tian</i>",
        "A <strong>front-end</strong> web developer",
        "HTML",
        "CSS",
        "React",
        "Redux",
        "Ant-Design",
        "..."
      ]}
    />
  </div>
);

export default Home;
