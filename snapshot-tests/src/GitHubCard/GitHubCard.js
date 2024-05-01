import React from "react";
import Card from "react-bootstrap/Card";
import BrenduhImage from './Brenduh.png'; 

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={BrenduhImage} />
        <Card.Body>
            <Card.Title>Brenduh</Card.Title>
            <Card.Text>
            I'm a friendly AI here to help with your coding questions!
            </Card.Text>
            <Card.Link href="https://github.com"> GitHub</Card.Link>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard;
