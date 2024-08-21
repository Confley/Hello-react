import React from "react";
import HomeCard from "./components/home/HomeCard";
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SiIcons8, SiReactbootstrap } from "react-icons/si";

const App = () => {
  return (
    <>
      <h1>App</h1>

      <>
        <Button
          variant="primary"
          onClick={() => window.open("https://react-bootstrap.netlify.app/")}
        >
          <SiReactbootstrap /> Bootstrap
        </Button>
        <Button
          variant="success"
          onClick={() =>
            window.open("https://react-icons.github.io/react-icons/")
          }
        >
          <SiIcons8 /> Icons
        </Button>
      </>
      <Container>
        <HomeCard />
      </Container>
    </>
  );
};

export default App;
