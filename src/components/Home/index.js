import React from "react";
import { Grid, Image, Card } from "semantic-ui-react";
import myImage from "../../assets/image/logo.png";
import TypedReactDemo from "./TypedReactDemo";
const description = ["Welcome aboard!"].join(" ");
const Home = () => (
  <div style={{ marginTop: "5rem" }}>
    <Grid style={{ paddingTop: "5rem" }}>
      <Grid.Column width={4}>
        <Image src={myImage} size="medium" circular />
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
      </Grid.Column>
      <Grid.Column width={12} style={{ paddingTop:"65px" }}>
        <Card style={{ width: "100%", boxShadow: "none" }}>
          <Card.Content style={{ fontSize:"24px" }} header="Hi there..." />
          <Card.Content
            style={{ padding: "2rem 0 2rem 0", fontSize:"18px" }}
            description={description}
          />
        </Card>
      </Grid.Column>
    </Grid>
    
  </div>
);

export default Home;
