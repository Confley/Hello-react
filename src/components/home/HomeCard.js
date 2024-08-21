import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaYoutube } from "react-icons/fa";

const HomeCard = (props) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://picsum.photos/200" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          {true ? (
            <Button variant="danger">
              <FaYoutube /> YouTube
            </Button>
          ) : (
            <></>
          )}
          {false ? <Button variant="light">Notion</Button> : <></>}
        </Card.Body>
      </Card>
    </>
  );
};

export default HomeCard;
