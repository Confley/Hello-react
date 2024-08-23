import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { RiReactjsLine } from "react-icons/ri";
import { SiReactbootstrap, SiIcons8 } from "react-icons/si";

const Nav = () => {
  return (
    <>
      <Navbar
        className="bg-body-tertiary navbar"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <RiReactjsLine
              style={{ color: "#61dafb", width: "30px", height: "30px" }}
            />{" "}
            Hello React
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <>
              <Button
                className="me-2"
                variant="primary"
                onClick={() =>
                  window.open("https://react-bootstrap.netlify.app/")
                }
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
