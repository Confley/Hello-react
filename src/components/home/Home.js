import React from "react";
import HomeCard from "./HomeCard";
import { Col, Row, Container } from "react-bootstrap";

const Home = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description 1",
      image: "https://picsum.photos/200/300?grayscale&blur=2",
      youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      notion:
        "https://www.notion.so/confley/CV-Torres-Esparza-Jos-de-Jes-s-1ce4de054bd6408fb6fa8d52fdd0eb11?pvs=4",
    },
    {
      title: "Project 2",
      description: "Description 2",
      image: "https://picsum.photos/200/300?grayscale&blur=2",
      youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Project 3",
      description: "Description 3",
      image: "https://picsum.photos/200/300?grayscale&blur=2",
      youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Project 4",
      description: "Description 4",
      image: "https://picsum.photos/200/300?grayscale&blur=2",
      youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Project 5",
      description: "Description 5",
      image: "https://picsum.photos/200/300?grayscale&blur=2",
      youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ];

  return (
    <>
      <h1>Projects</h1>
      <hr />
      <Container fluid>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col
              sm={3}
              key={index}
            >
              <HomeCard
                title={project.title}
                description={project.description}
                image={project.image}
                youtube={project.youtube}
                notion={project.notion}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
