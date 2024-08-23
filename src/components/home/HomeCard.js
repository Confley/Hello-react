import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaYoutube } from "react-icons/fa";

const HomeCard = (props) => {
  return (
    <>
      <div className="project-card">
        <div className="project-card-inner">
          <div className="project-card-front">
            <Card.Img
              variant="top"
              className="project-image"
              src="https://picsum.photos/200"
            />
            <Card.Title className="project-title">{props.title}</Card.Title>
          </div>
          <div className="project-card-back">
            <Card.Body>
              <Card.Text className="project-description">
                {props.description}
              </Card.Text>
              {props.youtube ? (
                <Button
                  variant="danger"
                  onClick={() => window.open(props.youtube)}
                >
                  <FaYoutube /> YouTube
                </Button>
              ) : (
                <></>
              )}
              {props.notion ? (
                <Button
                  variant="dark"
                  onClick={() => window.open(props.notion)}
                >
                  Notion
                </Button>
              ) : (
                <></>
              )}
            </Card.Body>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
